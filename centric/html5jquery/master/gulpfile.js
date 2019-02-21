var $ = require('gulp-load-plugins')(),
    gulp = require('gulp'),
    fs = require('fs'),
    path = require('path'),
    args = require('yargs').argv,
    del = require('del'),
    globby = require('globby'),
    gulpsync = $.sync(gulp),
    PluginError = $.util.PluginError,
    browserSync = require('browser-sync').create(),
    config      = require('./gulp.config');

// production mode (see 'build' task)
var isProduction = false;

// Mode switches
// Example:
//    gulp --usescss --usesourcemaps

var useSourceMaps = args.usesourcemaps || args.usesourcemap;
var useScss = args.usescss;

// switch to scss
if (useScss) {

    log('Using SCSS stylesheets...');

    config.source.styles.app = [
        config.paths.components + 'app.scss',
        config.paths.components + '**/*.scss'
    ];

}

// Helps to detect changes in layout or templates
// included from other files and ignore gulp-changed
// (see tasks 'templates:views' and 'watch')
var isLayoutOrTpl = false;

//---------------
// TASKS
//---------------


// JS
gulp.task('scripts', ['scripts:validate'], function() {
    return gulp.src(config.source.scripts)
        .pipe($.concat('app.js'))
        .pipe($.if(isProduction, $.uglify(config.uglify)))
        .pipe(gulp.dest(config.build.scripts));
});

gulp.task('scripts:validate', function() {
    return gulp.src(config.source.scripts)
        .pipe($.jsvalidate())
        .on('error', handleError);
});


// APP LESS
gulp.task('styles:app', function() {
    log('Building application styles..');
    return gulp.src(config.source.styles.app)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe(useScss ? $.sass() : $.less())
        .on('error', handleError)
        .pipe($.clipEmptyFiles())
        .pipe( $.sort() )
        .pipe($.concat('app.css'))
        .pipe($.if(isProduction, $.minifyCss()))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(config.build.styles))
        .pipe(browserSync.stream())

});

// APP RTL
gulp.task('styles:app:rtl', function() {
    log('Building application RTL styles..');
    return gulp.src(config.source.styles.app)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe(useScss ? $.sass() : $.less())
        .on('error', handleError)
        .pipe($.clipEmptyFiles())
        .pipe($.rtlcss()) /* RTL Magic ! */
        .pipe( $.sort() )
        .pipe($.concat('app-rtl.css'))
        .pipe($.if(isProduction, $.minifyCss()))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(config.build.styles))
        .pipe(browserSync.stream())

});

// VIEWS
gulp.task('templates:views', function() {
    log('Building views.. ');

    var jadeFilter = $.filter('**/*.jade', {
        restore: true
    });

    return gulp.src(config.source.templates.views)
        .pipe($.if(!isProduction && !isLayoutOrTpl, $.changed(config.build.templates.views, {
            extension: '.html',
            hasChanged: fileHasChanged
        })))
        .pipe(jadeFilter)
        /*.pipe($.data(function() {
            return {
                scripts: globby.sync(config.source.scripts)
            };
        }))*/
        .pipe($.jade(config.jadeOpts))
        .on('error', handleError)
        .pipe(jadeFilter.restore)
        .pipe($.flatten())
        .pipe($.if(isProduction, $.usemin({
            css: ['concat'],
            js: ['concat']
        })))
        .on('error', handleError)
        .pipe(gulp.dest(config.build.templates.views))
        .pipe(browserSync.stream())

});

// Compress assets for production
gulp.task('compress', function() {
    log('Compressing vendor assets.. ');

    var assets = config.paths.app + '{css,js}/vendor*';
    var jsFilter = $.filter(config.paths.app + '**/*.js', {
        restore: true
    });
    var cssFilter = $.filter(config.paths.app + '**/*.css', {
        restore: true
    });

    return gulp.src(assets)
        .pipe(cssFilter)
            .pipe($.minifyCss(config.minifyCss))
            .on('error', handleError)
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
            .pipe($.uglify(config.uglifyVendor))
            .on('error', handleError)
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(config.paths.app));


});

// Images
gulp.task('images', function() {
    log('Copying images..');
    return gulp.src(config.source.images)
        .pipe(gulp.dest(config.build.images));
});

// Fonts
gulp.task('fonts', function() {
    log('Copying fonts..');
    return gulp.src(config.source.fonts)
        .pipe($.flatten())
        .pipe(gulp.dest(config.build.fonts));
});


//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', function() {
    log('Starting Watch..');

    gulp.watch(config.source.scripts, gulpsync.sync(['scripts', 'reload']) );
    gulp.watch(config.source.styles.app, ['styles:app', 'styles:app:rtl']);
    gulp.watch(config.source.templates.watch, ['templates:views'])
        .on('change', function(file) {
            // Each time a jade file changes, check if layout or template
            // if so, activate flag to ignore changed control since we don't have
            // counterpart file to detect file time differences
            isLayoutOrTpl = false;
            var fname = path.basename(file.path);
            if (fname.indexOf('.layout.') > -1 || fname.indexOf('.tpl.') > -1)
                isLayoutOrTpl = true;
        });

});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

//---------------
// BROWSER SYNC
//---------------

// Rerun the task when a file changes
gulp.task('browsersync', function() {
    log('Starting BrowserSync..');

    browserSync.init({
        notify: false,
        server: {
            baseDir: '..'
        }
    });

});


//---------------
// LINT
//---------------

gulp.task('lint', function() {
    return gulp
        .src(config.source.scripts)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshint.reporter('fail'));
});

//---------------
// CLEAN
//---------------

// Remove all files from the build paths
gulp.task('clean', function(done) {
    var delconfig = [].concat(
        config.build.styles,
        config.build.scripts,
        config.build.images,
        config.build.fonts,
        config.build.templates.views + '*.html'
    );

    log('Cleaning: ' + $.util.colors.blue(delconfig));
    // force: clean files outside current directory
    del(delconfig, {
        force: true
    }, done);
});

// Check and generate stylesheet of unused css
gulp.task('uncss', function () {
    return gulp.src(config.build.styles + '/app.css')
        .pipe($.uncss({
            html: [config.paths.app + '/*.html']
        }))
        .pipe(gulp.dest(config.build.styles + '/uncss'));
});

//---------------
// MAIN TASKS
//---------------

// build for production (minify)
gulp.task('dist', gulpsync.sync([
    'prod',
    'build',
    'compress'
]));

gulp.task('prod', function() {
    log('Starting production build...');
    isProduction = true;
});

// build for development (no minify)
gulp.task('default', gulpsync.sync([
    'build',
    'watch'
]), done);

// Server for development
gulp.task('serve', gulpsync.sync([
    'build',
    'watch',
    'browsersync'
]), done);

gulp.task('serve-prod', gulpsync.sync([
    'dist',
    'watch',
    'browsersync'
]), done);

// build tasks
gulp.task('build', gulpsync.sync([
    'scripts',
    'styles:app',
    'styles:app:rtl',
    'templates:views',
    'images',
    'fonts'
]));


/////////////////////

// Error handler
function handleError(err) {
    log(err.toString());
    this.emit('end');
}

// log to console using
function log(msg) {
    $.util.log($.util.colors.blue(msg));
}

// a simple message
function done() {
    log('********');
    log('* Done * Watching files to recompile..');
    log('********');
}

// We are using a different folder structure in source and destiny.
// with this function we compare each file time to
// detect what have changed no matter their location
// (Compares one by one -> jade vs html)
function fileHasChanged(stream, cb, sourceFile, destPath) {
    var destPathTo = config.build.templates.views;
    var modDestPath = destPathTo + path.basename(destPath);

    fs.stat(modDestPath, function(err, targetStat) {
        if (err) {
            if (err.code !== 'ENOENT') {
                stream.emit('error', new gutil.PluginError('gulp-changed', err, {
                    fileName: sourceFile.path
                }));
            }
            stream.push(sourceFile);
        } else if (sourceFile.stat.mtime > targetStat.mtime) {
            stream.push(sourceFile);
        }
        cb();
    });
};