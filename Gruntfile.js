
module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
				report: 'gzip'
			},
			dist: {
				files: {
					'dist/anzeixer.min.js': ['src/anzeixer.js']
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'src/**/*.js']
		},

		copy: {
			demo: {
				src: 'src/anzeixer.js',
				dest: 'demo/js/anzeixer.js',
			},
			dist: {
				src: 'src/anzeixer.js',
				dest: 'dist/anzeixer.js',
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['jshint', 'uglify', 'copy']);
	grunt.registerTask('build', ['jshint', 'uglify', 'copy']);

};