'use strict';

module.exports = function(grunt) {
    return {
        integration: {
            src: ['tests/integration/**/*.test.js'],
            options: {
                require: ['tests/integration/index.js'],
                globals: ['expect', 'sinon'],
                ignoreLeaks: false,
                reporter: grunt.option('reporter') || 'spec'
            }
        }
    };
};
