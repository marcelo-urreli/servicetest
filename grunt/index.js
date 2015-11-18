'use strict';

let fs = require('fs');
let path = require('path');

module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
        configPath: __dirname + '/contrib'
    });
};
