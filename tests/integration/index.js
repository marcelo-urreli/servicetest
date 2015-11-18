'use strict';

let _ = require('underscore');
let chai = require('chai');
let sinon = require('sinon');
let request = require('supertest');
let sinonChai = require('sinon-chai');
let proxyquire = require('proxyquire');

global._ = _;
global.expect = chai.expect;
global.sinon = sinon;
global.proxyquire = proxyquire.noCallThru();
global.request = request;
global.api = {
    jarvis: 'http://api.olx.com'
};

chai.use(sinonChai);
