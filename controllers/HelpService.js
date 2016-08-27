'use strict';

var help = require("../help/help.json");

exports.helpGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/

  if(Object.keys(help).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(help || {}, null, 2));
  }
  else {
    res.end();
  }
  
}
