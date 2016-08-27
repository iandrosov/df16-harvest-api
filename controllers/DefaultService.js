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

exports.helpGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "title" : "aeiou",
    "content" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.quotaGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * growerid (String)
  * date (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ 
   {
    "id": 32,
    "quota": "2",
    "canein": 100,
    "trucksin": 10,
    "trucksremaining": 5,
    "datetimeupdated": "2016-06-25 09:37:04",
    "maingrowerid": "A901",
    "reason": "8",
    "status": "Adjust",
    "quota_change": 8
  },
  {
    "canein" : 123,
    "trucksremaining" : 123,
    "reason" : null,
    "trucksin" : 123,
    "quota_change" : null,
    "datetimeupdated" : "2016-08-13 15:09:25",
    "quota" : "25",
    "id" : 123,
    "maingrowerid" : "A901",
    "status" : null
  } ],
  "almaestimate" : 123,
  "published_at" : "2016-08-13 15:09:25",
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

exports.quotaIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "canein" : 123,
  "trucksremaining" : 123,
  "reason" : "aeiou",
  "trucksin" : 123,
  "quota_change" : 123,
  "datetimeupdated" : "2000-01-23T04:56:07.000+00:00",
  "quota" : "aeiou",
  "id" : 123,
  "maingrowerid" : "aeiou",
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

exports.quotaPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * quotaid (QuotaUpdate)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "canein" : 123,
    "trucksremaining" : 123,
    "reason" : "aeiou",
    "trucksin" : 123,
    "quota_change" : 123,
    "datetimeupdated" : "2000-01-23T04:56:07.000+00:00",
    "quota" : "aeiou",
    "id" : 123,
    "maingrowerid" : "aeiou",
    "status" : "aeiou"
  } ],
  "almaestimate" : 123,
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

exports.sampledataGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * growerid (String)
  * date (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "allaverage" : "",
  "data" : [ [ {
    "rs" : 1.3579000000000001069366817318950779736042022705078125,
    "juicebrix" : 1.3579000000000001069366817318950779736042022705078125,
    "sampleid" : "aeiou",
    "moistare" : 1.3579000000000001069366817318950779736042022705078125,
    "percentsediment" : 1.3579000000000001069366817318950779736042022705078125,
    "maingrowerid" : "aeiou",
    "mlmud" : 1.3579000000000001069366817318950779736042022705078125,
    "canepol" : 1.3579000000000001069366817318950779736042022705078125,
    "sampledate" : "2000-01-23T04:56:07.000+00:00",
    "canebrix" : 1.3579000000000001069366817318950779736042022705078125,
    "canefibrq" : 1.3579000000000001069366817318950779736042022705078125,
    "labtrs" : 1.3579000000000001069366817318950779736042022705078125,
    "id" : "",
    "moistpercentbag" : 1.3579000000000001069366817318950779736042022705078125,
    "seq" : "aeiou",
    "res" : 1.3579000000000001069366817318950779736042022705078125,
    "juicepurity" : 1.3579000000000001069366817318950779736042022705078125,
    "polread" : 1.3579000000000001069366817318950779736042022705078125,
    "juicepol" : 1.3579000000000001069366817318950779736042022705078125,
    "moismd" : 1.3579000000000001069366817318950779736042022705078125,
    "sumtotal" : 1.3579000000000001069366817318950779736042022705078125,
    "urlpath" : "aeiou",
    "pjbrx" : 1.3579000000000001069366817318950779736042022705078125,
    "adjresidue" : 1.3579000000000001069366817318950779736042022705078125,
    "adjgramsbag" : 1.3579000000000001069366817318950779736042022705078125,
    "moismw" : 1.3579000000000001069366817318950779736042022705078125,
    "pjpolar" : 1.3579000000000001069366817318950779736042022705078125,
    "mud" : 1.3579000000000001069366817318950779736042022705078125,
    "acct" : "aeiou"
  } ] ],
  "diff" : "",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "growerid" : "aeiou",
  "status" : "aeiou",
  "groweraverage" : {
    "juicepurity" : 1.3579000000000001069366817318950779736042022705078125,
    "juicebrix" : 1.3579000000000001069366817318950779736042022705078125,
    "growerno" : "aeiou",
    "fibraque" : 1.3579000000000001069366817318950779736042022705078125,
    "juicepol" : 1.3579000000000001069366817318950779736042022705078125,
    "corelabtrs" : 1.3579000000000001069366817318950779736042022705078125,
    "estmillcrs" : 1.3579000000000001069366817318950779736042022705078125,
    "adjgramsbag" : 1.3579000000000001069366817318950779736042022705078125,
    "sediment" : 1.3579000000000001069366817318950779736042022705078125
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.settingsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * growerid (String)
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

