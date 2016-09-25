'use strict';

var url = require('url');


var Authorize = require('./AuthorizeService');


module.exports.authorizeGET = function authorizeGET (req, res, next) {
  Authorize.authorizeGET(req.swagger.params, res, next);
};

module.exports.authorizePUT = function authorizePUT (req, res, next) {
  Authorize.authorizePUT(req.swagger.params, res, next);
};
