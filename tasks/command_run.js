/*
 * grunt-command-run
 * https://github.com/Kreozot/grunt-command-run
 *
 * Copyright (c) 2015 Kreozot
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('command_run', 'Grunt plugin for easily run command line tools for your files', function() {

		grunt.log.writeln('Processing started...');
		var exec = require('child_process').exec;
		var done = this.async();
		var getCommand = this.options().getCommand;

		var fileGroupsCount = this.files.length;
		var processedGroupsCount = 0;
		this.files.forEach(function(fileGroup) {
			var files = fileGroup.src.filter(function(filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			var filesCount = files.length;
			var processedFilesCount = 0;
			files.forEach(function(filepath) {
				exec(getCommand(filepath, fileGroup.dest),
					function(error, stdout, stderr) {
						if (stdout && (stdout.length > 0)) {
							grunt.log.writeln('stdout: ' + stdout);
						}
						if (stderr && (stderr.length > 0)) {
							grunt.log.error('stderr: ' + stderr);
						} 
						if (error !== null) {
							grunt.log.error('exec error: ' + error);
						}

						processedFilesCount++;
						if (processedFilesCount >= filesCount) {
							processedGroupsCount++;
							if (processedGroupsCount >= fileGroupsCount) {								
								done();
							}
						}
					}
				);
			});
		});
	});

};
