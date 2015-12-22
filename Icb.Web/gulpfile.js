﻿"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var rimraf = require("rimraf");

var paths = {
    webrootJs: "./wwwroot/js",
    webrootCss: "./wwwroot/css",

    sass: [
        "scss/app.scss"
    ],
    sassLibs: [
        //bootstrap
        "bower_components/bootstrap-sass/assets/stylesheets"
    ],

    js: [
        "app/shared/module.js",
        "app/public/module.js",
        "app/admin/module.js",
        "app/**/*.js"
    ],
    jsLibs: [
        "bower_components/jquery/dist/jquery.min.js",

        //jquery validate
        "bower_components/jquery-validation/dist/jquery.validate.min.js",
        "bower_components/jquery-validation/dist/additional-methods.min.js",
        "bower_components/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js",

        //bootstrap
        "bower_components/bootstrap/dist/js/bootstrap.min.js",

        //angular
        "bower_components/angular/angular.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-aria/angular-aria.min.js",
        "bower_components/angular-material/angular-material.min.js",
        "bower_components/angular-route/angular-route.min.js"
    ]
};

//CLEAN
gulp.task("clean:js", function (cb) {
    rimraf(paths.webrootJs + "**/*.js", cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.webrootCss + "app.css", cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

//SASS
gulp.task("sass", function () {
    return gulp.src(paths.sass)
        .pipe($.sourcemaps.init())
		.pipe($.sass({
		    outputStyle: "compressed",
		    includePaths: paths.sassLibs
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer({
		    browsers: ["last 2 versions", "ie >= 9"]
		}))
        .pipe($.sourcemaps.write())
		.pipe(gulp.dest(paths.webrootCss));
});


//JS
gulp.task("js:libs", function () {
    return gulp.src(paths.jsLibs)
        //.pipe($.uglify())
		.pipe($.concat("libs.js"))
		.pipe(gulp.dest(paths.webrootJs));
});

gulp.task("js:hint", function () {
    return gulp.src(paths.js)
		.pipe($.jshint())
		.pipe($.jshint.reporter("default"));
});

gulp.task("js", ["js:hint"], function () {
    return gulp.src(paths.js)
		.pipe($.sourcemaps.init())
		.pipe($.uglify())
		.pipe($.concat("app.js"))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(paths.webrootJs));
});

//DEFAULT
gulp.task("default", ["js:libs", "sass"]);

gulp.task("watch", ["default"], function () {
    gulp.watch(["scss/**/*.scss"], ["sass"]);
    //gulp.watch(paths.js, ["js"]);
});
