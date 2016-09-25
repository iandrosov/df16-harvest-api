'use strict';

exports.surveyGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * growerid (String)
  * date (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "lessharvestacres" : 1.3579000000000001069366817318950779736042022705078125,
    "totaltonacre" : 1.3579000000000001069366817318950779736042022705078125,
    "total" : 1.3579000000000001069366817318950779736042022705078125,
    "remaintonacre" : 1.3579000000000001069366817318950779736042022705078125,
    "totalacres" : 1.3579000000000001069366817318950779736042022705078125,
    "remaintotal" : 1.3579000000000001069366817318950779736042022705078125,
    "totalalmatons" : 1.3579000000000001069366817318950779736042022705078125,
    "id" : "",
    "lesstonacre" : 1.3579000000000001069366817318950779736042022705078125,
    "lesstotal" : 1.3579000000000001069366817318950779736042022705078125,
    "remainacres" : 1.3579000000000001069366817318950779736042022705078125,
    "totalalma" : 1.3579000000000001069366817318950779736042022705078125,
    "growerid" : "aeiou"
  } ],
  "survey" : "aeiou",
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

