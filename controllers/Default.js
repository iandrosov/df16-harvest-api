'use strict';

var url = require('url');


var Default = require('./DefaultService');
var Helper = require('./HelpService');
var Quota = require('./QuotaService');

module.exports.authorizeGET = function authorizeGET (req, res, next) {
  Default.authorizeGET(req.swagger.params, res, next);
};

module.exports.authorizePUT = function authorizePUT (req, res, next) {
  Default.authorizePUT(req.swagger.params, res, next);
};

module.exports.devicePOST = function devicePOST (req, res, next) {
  Default.devicePOST(req.swagger.params, res, next);
};

module.exports.helpGET = function helpGET (req, res, next) {
  Helper.helpGET(req.swagger.params, res, next);
};

module.exports.quotaGET = function quotaGET (req, res, next) {
  Quota.quotaGET(req.swagger.params, res, next);
};

module.exports.quotaIdGET = function quotaIdGET (req, res, next) {
  Quota.quotaIdGET(req.swagger.params, res, next);
};

module.exports.quotaPOST = function quotaPOST (req, res, next) {
  Quota.quotaPOST(req.swagger.params, res, next);
};

module.exports.sampledataGET = function sampledataGET (req, res, next) {
  Default.sampledataGET(req.swagger.params, res, next);
};

module.exports.settingsGET = function settingsGET (req, res, next) {
  Default.settingsGET(req.swagger.params, res, next);
};

module.exports.surveyGET = function surveyGET (req, res, next) {
  Default.surveyGET(req.swagger.params, res, next);
};
