#! /usr/bin/env node
var inspect = require('eyespect').inspector()
var should = require('should');
var getPIDs = require('./getPIDs')
getPIDs(function (err, pids) {
  should.not.exist(err, 'error getting pids')
  inspect(pids,'pids')
})
