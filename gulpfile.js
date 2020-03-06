const {task, watch, src, dest, series} = require('gulp'),
	sass = require('gulp-sass'),
	pump = require('pump'),
	webserver = require('gulp-webserver')

task(transpile = () => pump([
	src('sass/app.sass'),
	sass({
		outputStyle: 'compressed',
	}).on('error', sass.logError),
	dest('css'),
]))

task(server = () => {
	pump([
		src('./'),
		webserver({
			livereload: true,
			directoryListing: true,
			open: true,
		})
	])
	watch('sass/**/*', transpile)
})

exports.server = series(transpile, server)