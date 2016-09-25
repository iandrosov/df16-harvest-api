'use strict';

exports.devicePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Device)
  **/
    var examples = {};
  examples['application/json'] = {
  "samplenotificationflag" : "aeiou",
  "pubreporturl" : "aeiou",
  "intouchurl" : "aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "growerid" : "aeiou",
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

