/*
 * grunt-command-run
 * https://github.com/Kreozot/grunt-command-run
 *
 * Copyright (c) 2015 Kreozot
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Creating temp directory
        mkdir: {
            tmp: {
                options: {
                    create: ['tmp']
                }
            }
        },

        // Configuration to be run (and then tested).
        command_run: {
            test: {
                options: {
                    getCommand: function(file, dest) {
                        if (process.platform === "win32") {
                            file = file.replace(/\//g, '\\');
                            dest = dest.replace(/\//g, '\\');
                            return 'copy ' + file + ' ' + dest + '';
                        } else {
                            return 'mv ' + file + ' ' + dest + '';
                        }
                    }
                },
                files: [{
                    expand: false,
                    src: ['test/testfiles/*.txt'],
                    dest: 'tmp/'
                }]
            },
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-mkdir');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'mkdir', 'command_run', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
