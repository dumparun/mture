var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var del = require('del');
var mergeStream = require('merge-stream');
var shell = require('gulp-shell')

var paths = {
	src : './www_dev/',
	dest : './www',
	sass : [ './scss/**/*.scss' ],
	appJS : './www_dev/app/**/*.js',
	templates : './www_dev/templates/**/*',
	css : './www_dev/css/**/*',
	indexHTML : './www_dev/index.html',
	appDest : './www/app',
	cssDest : './www/css',
	templateDest : './www/templates',
};

var libsPath = {
	ionicCSS : 'lib/ionic/css/ionic.css',
	ionicBundle : 'lib/ionic/js/ionic.bundle.js',
	angularResouce : 'lib/ionic/js/angular/angular-resource.min.js',
	angularMessage : 'lib/ionic/js/angular/angular-messages.min.js',
	ngCordova : 'lib/ngCordova/ng-cordova.min.js'
}

gulp.task('default', [ 'sass' ]);

gulp.task('buildandroid' , ['preparebuild', 'cordovaAndroid']);

gulp.task('preparebuild', [ 'clean', 'copyLibs', 'uglify' ], function() {

	var copyCSS = gulp.src(paths.css).pipe(gulp.dest(paths.cssDest));
	var copyTemplates = gulp.src(paths.templates).pipe(
			gulp.dest(paths.templateDest));
	var copyIndexHTML = gulp.src(paths.indexHTML).pipe(gulp.dest(paths.dest));
	return mergeStream(copyCSS, copyTemplates, copyIndexHTML);

});

gulp.task('cordovaAndroid', shell.task([ 'cordova build android --release' ]))

gulp.task('sass', function(done) {
	gulp.src('./scss/ionic.app.scss').pipe(sass({
		errLogToConsole : true
	})).pipe(gulp.dest('./www_dev/css/')).pipe(minifyCss({
		keepSpecialComments : 0
	})).pipe(rename({
		extname : '.min.css'
	})).pipe(gulp.dest('./www_dev/css/')).on('end', done);
});

gulp.task('uglify', function() {
	return gulp.src(paths.appJS).pipe(uglify()).pipe(gulp.dest(paths.appDest));
});

gulp.task('clean', function(cb) {
	del([ './www' ], cb);
});

gulp.task('copyLibs', function() {
	for ( var key in libsPath) {
		var destPath = libsPath[key].substring(0, libsPath[key]
				.lastIndexOf("/"));
		gulp.src(paths.src + libsPath[key]).pipe(
				gulp.dest(paths.dest + '/' + destPath));
	}
});

gulp.task('install', [ 'git-check' ], function() {
	return bower.commands.install().on('log', function(data) {
		gutil.log('bower', gutil.colors.cyan(data.id), data.message);
	});
});

gulp
		.task(
				'git-check',
				function(done) {
					if (!sh.which('git')) {
						console
								.log(
										'  '
												+ gutil.colors
														.red('Git is not installed.'),
										'\n  Git, the version control system, is required to download Ionic.',
										'\n  Download git here:',
										gutil.colors
												.cyan('http://git-scm.com/downloads')
												+ '.',
										'\n  Once git is installed, run \''
												+ gutil.colors
														.cyan('gulp install')
												+ '\' again.');
						process.exit(1);
					}
					done();
				});
