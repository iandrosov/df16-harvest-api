'use strict';

var url = require('url');


var Survey = require('./SurveyService');


module.exports.surveyGET = function surveyGET (req, res, next) {
  Survey.surveyGET(req.swagger.params, res, next);
};
