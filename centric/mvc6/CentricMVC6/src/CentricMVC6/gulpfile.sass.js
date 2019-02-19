/// <binding BeforeBuild='default' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    rtlcss = require("gulp-rtlcss");

var paths = { webroot: "./wwwroot/" };
paths.components = paths.webroot + 'components/';

// Sources
paths.js = [
    paths.components + 'app.js',
    paths.components + '**/*.js'
];

//paths.minJs = paths.webroot + "master/js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
//paths.minCss = paths.webroot + "css/**/*.min.css";
paths.scss = paths.components + "**/*.scss";
paths.scssWatch = paths.scss;
// Dests
paths.concatJsDest = paths.webroot + "js";
paths.concatCssDest = paths.webroot + "css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.concatJsDest));
});

gulp.task('js:watch', function () {
    gulp.watch(paths.js, ['min:js']);
});

gulp.task('scss:app', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task('scss:watch', function () {
    gulp.watch(paths.scssWatch, ['scss']);
});

gulp.task('scss', ['scss:app']);

gulp.task('rtl', function () {
    gulp.src(paths.css)
        .pipe(rtlcss())
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task("min:css", ["scss"], function () {
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task("min", ['min:css', 'min:js']);

gulp.task("watch", ['scss:watch', 'js:watch']);

gulp.task("default", ["min:js", "scss"]);
