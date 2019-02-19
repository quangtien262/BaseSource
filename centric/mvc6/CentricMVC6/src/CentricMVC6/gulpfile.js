/// <binding BeforeBuild='default' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    less = require("gulp-less"),
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
paths.less = paths.components + "**/*.less";
paths.lessWatch = paths.less;
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

gulp.task('less:app', function () {
    gulp.src(paths.less)
        .pipe(less())
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task('less:watch', function () {
    gulp.watch(paths.lessWatch, ['less']);
});

gulp.task('less', ['less:app']);

gulp.task('rtl', function () {
    gulp.src(paths.css)
        .pipe(rtlcss())
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task("min:css", ["less"], function () {
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task("min", ['min:css', 'min:js']);

gulp.task("watch", ['less:watch', 'js:watch']);

gulp.task("default", ["min:js", "less"]);
