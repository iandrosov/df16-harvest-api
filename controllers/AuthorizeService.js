'use strict';

exports.authorizeGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * apikey (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "apikey" : "d548309147fb791b9f3d4d831468a706",
  "growerid" : "A901",
  "status" : "Success"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.authorizePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * apikey (String)
  * username (String)
  * password (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "apikey" : "d548309147fb791b9f3d4d831468a706",
  "growerid" : "A901",
  "status" : "Success"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

