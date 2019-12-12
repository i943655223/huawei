var gulp = require('gulp');
var load = require('gulp-load-plugins')();
var browser = require('browser-sync').create();

gulp.task('js',function(done){
	gulp.src('./src/js/*.js')
	.pipe(load.babel({'presets':['@babel/env']}))
	.pipe(load.uglify())
	.pipe(gulp.dest('./dist/js/'))
	done()
})
gulp.task('css',function(done){
	gulp.src('./src/css/*.scss')
	.pipe(load.sass())
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/css/'))
	done()
})
gulp.task('html',function(done){
	gulp.src('./src/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest('./dist'))
	done()
})
gulp.task('images',function(done){
	gulp.src('./src/images/**')
	.pipe(load.imagemin())
	.pipe(gulp.dest('./dist/images'))
	done()
})
gulp.task('sass',function(done){
	gulp.src('./src/css/*.scss')
	.pipe(load.sass())
	.pipe(gulp.dest('./dist/css'))
	done()
})
gulp.task('server',gulp.series(gulp.parallel('html','css','js'),function(done){
	browser.init({
		server:'./dist',
		port:8080
	})
	gulp.watch('./src',gulp.series(gulp.parallel('html','css','js'),function(done){
		browser.reload()
		done()
	}))
	done()
}))