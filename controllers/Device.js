'use strict';

var url = require('url');


var Device = require('./DeviceService');


module.exports.devicePOST = function devicePOST (req, res, next) {
  Device.devicePOST(req.swagger.params, res, next);
};
