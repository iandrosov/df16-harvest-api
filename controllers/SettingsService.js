'use strict';

exports.settingsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * growerid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "samplenotificationflag" : "false",
  "pubreporturl" : "aeiou",
  "intouchurl" : "http://almaplantation.intouchgps.com/readings/public/318857",
  "published_at" : "2016-09-05 15:09:25",
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

