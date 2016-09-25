'use strict';

var url = require('url');


var Quota = require('./QuotaService');


module.exports.quotaGET = function quotaGET (req, res, next) {
  Quota.quotaGET(req.swagger.params, res, next);
};

module.exports.quotaIdGET = function quotaIdGET (req, res, next) {
  Quota.quotaIdGET(req.swagger.params, res, next);
};

module.exports.quotaPOST = function quotaPOST (req, res, next) {
  Quota.quotaPOST(req.swagger.params, res, next);
};
