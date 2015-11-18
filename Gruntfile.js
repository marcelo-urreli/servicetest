'use strict';

module.exports = function(grunt) {
    require('./grunt')(grunt);

    grunt.registerTask('test-integration', ['env:integration', 'mochaTest:integration']);
    grunt.registerTask('test', ['test-integration']);
};
