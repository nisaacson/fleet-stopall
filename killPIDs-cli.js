#! /usr/bin/env node
var inspect = require('eyespect').inspector()
var should = require('should');
var getPIDs = require('./getPIDs')
var killPIDs = require('./killPIDs')
getPIDs(function (err, pids) {
  should.not.exist(err, 'error getting pids: ' + JSON.stringify(pids, null, ' '))
  killPIDs(pids, function (err) {
    should.not.exist(err, 'error killing pids: ' + JSON.stringify(err, null, ' '))
    inspect('all pids killed')
  })
})
