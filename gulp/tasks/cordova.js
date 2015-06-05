var gulp         = require('gulp');
var config       = require('../config').cordova;
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');

gulp.task('cordova', ['build'], function(callback) {
	gulp.src(config.js)
    .pipe(gulp.dest(config.path + "js"))
    gulp.src(config.assets)
    .pipe(gulp.dest(config.path + "assets"));
});