'use strict';

var url = require('url');


var Settings = require('./SettingsService');


module.exports.settingsGET = function settingsGET (req, res, next) {
  Settings.settingsGET(req.swagger.params, res, next);
};
