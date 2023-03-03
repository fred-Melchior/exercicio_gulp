const gulp = require('gulp')
const sass = require('sass')(require('gulp-sass'))
const imagemin = require('gulp-imagemin')
const uglify = requite('gulp-uglify')

function compilaSass(){
    return gulp.src('./source/style/*.scss')
    .pipe(gulp.dest('./build/style'))

}

function comprimeImg(){
    return gulp.src('./source/image/*')
    .pipe(gulp.dest('./build/image'))
}

function comprimeJs(){
    return gulp.src('./source/script/*.js')
    .pipe(gulp.dest('./build/script'))
}

exports.default = function(){
    gulp.watch('./source/style/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/image/*', {ignoreInitial: false}, gulp.series(comprimeImg))
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(comprimeJs))
}