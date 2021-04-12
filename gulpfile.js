/* ======================================================================================================
 * Plugins utilizados
 * ======================================================================================================*/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    imagemin = require("gulp-imagemin")
    imageminOptipng = require('imagemin-optipng'),
    rename = require('gulp-rename');



/* ======================================================================================================
 * Tarea PUG
 * ======================================================================================================*/


gulp.task('pug', function() {
    return gulp.src(['./src/pug/*.pug', '!./src/pug/includes'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
});


/* ======================================================================================================
 * Tarea sobre los Estilos SCSS
 * ======================================================================================================*/

gulp.task('sass', function() {

    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(sourcemaps.init())
        .pipe(cssmin().on('error', function(err) {
            console.log(err);
        }))
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/css/'))
        .pipe(notify({ title: "SCSS", message: "OK" }))
        .pipe(browserSync.stream());
});


/* ======================================================================================================
 * Tarea sobre css minify
 * ======================================================================================================*/

gulp.task('minifyCSS', function() {

    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());

});

/* ======================================================================================================
 * Tarea sobre minify image
 * ======================================================================================================*/
gulp.task('img', function() {
    gulp.src('./src/img/**/**.*')
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 10})
        ]))
        .pipe(gulp.dest('./dist/img/'))

});

/* ======================================================================================================
 * Tarea sobre los Scripts
 * ======================================================================================================*/
gulp.task('scripts', function() {
    return gulp.src([
        './src/js/*.js'
    ])

    .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});

    

/* ======================================================================================================
 * Browser Sync
 * ======================================================================================================*/
gulp.task('browser-sync', ['watch', 'pastefiles'], function() {
    browserSync.init({
        injectChanges: true,
        files: ['*.html', './dist/**/*.{html,css,js}'],
        server: "./dist/",
    });

});



/* ======================================================================================================
 * Send Fonts and Images
 * ======================================================================================================*/
gulp.task('pastefiles', function() {

    gulp.src("./src/fonts/**/**.*")
        .pipe(gulp.dest('./dist/fonts/'));

    gulp.src('./src/img/**/**.*')
        .pipe(gulp.dest('./dist/img/'));

    // gulp.src(['./src/pug/*.pug', '!./src/pug/includes'])
    // .pipe(gulp.dest('./dist/'));


    // gulp.src('./src/js/*.js')

    // .pipe(uglify())
    //     .pipe(concat('scripts.min.js'))
    //     .pipe(gulp.dest('./dist/js'));

    // gulp.pipe(concat('styles.min.css'))
    // .pipe(gulp.dest('./dist/css/'));

});


/* ======================================================================================================
 * Tarea por default
 * ======================================================================================================*/
gulp.task('watch', function() {
    gulp.watch('./src/scss/**/**.scss', ['sass']);
    gulp.watch('./src/css/**/**.css', ['minifyCSS']);
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/pug/**/*.pug', ['pug']);
    gulp.watch('./src/fonts/*', ['pastefiles']);
    gulp.watch('./src/img/**/**.*', ['img']);

});



/* ======================================================================================================
 * Default Task
 * ======================================================================================================*/

gulp.task('default', ['pug', "sass", 'scripts', "minifyCSS" , 'img' , 'browser-sync', 'pastefiles', 'watch']);
