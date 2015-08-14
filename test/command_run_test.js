'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
	test.expect(numAssertions)
	test.done()
  Test assertions:
	test.ok(value, [message])
	test.equal(actual, expected, [message])
	test.notEqual(actual, expected, [message])
	test.deepEqual(actual, expected, [message])
	test.notDeepEqual(actual, expected, [message])
	test.strictEqual(actual, expected, [message])
	test.notStrictEqual(actual, expected, [message])
	test.throws(block, [error], [message])
	test.doesNotThrow(block, [error], [message])
	test.ifError(value)
*/

exports.command_run = {
	setUp: function(done) {		
		done();
	},
	default_options: function(test) {
		test.expect(2);

		var test1Exists = grunt.file.exists('tmp/test1.txt');
		var test2Exists = grunt.file.exists('tmp/test2.txt');
		test.ok(test1Exists, 'test1.txt exists');
		test.ok(test2Exists, 'test2.txt exists');

		test.done();
	}
};
