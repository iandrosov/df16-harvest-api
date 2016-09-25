'use strict';

var url = require('url');


var Sample = require('./SampleService');


module.exports.sampledataGET = function sampledataGET (req, res, next) {
  Sample.sampledataGET(req.swagger.params, res, next);
};
