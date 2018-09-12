let gulp = require('gulp');
let  autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let pump = require('pump');
let rename = require("gulp-rename");



gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/index.es5.js'),
            rename('index.js'),
            uglify(),
            gulp.dest('dist/')
        ],
        cb
    );
});





gulp.task('css', () =>
    gulp.src('src/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))  
    .pipe(gulp.dest('dist'))
);
