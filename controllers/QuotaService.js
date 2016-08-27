'use strict';

var util = require('util');
const Promise = require('bluebird');
const readFile = Promise.promisify(require('fs').readFile);

const config = require('config');
const knex = require('knex')({ client: 'postgres', connection: config.DATABASE_URL });
const bookshelf = require('bookshelf')(knex);

/**
 * Define DB Model for Quota records
 */
const Quota = bookshelf.Model.extend({
  tableName: 'harvest.harvest_quota__c',
  idAttribute: 'grower_id__c',

});

const Quotas = bookshelf.Collection.extend({
  model: Quota,

});


function quotaTransform(eq) {
  return {

    id: eq.get('id'),
    quota: eq.get('quota__c'),
    canein: eq.get('delivered__c'),
    trucksin: eq.get('trucksin__c'),
    trucksremaining: eq.get('trucksremaining__c'),
    datetimeupdated: eq.get('quota_date__c'), //"2016-06-25 09:37:04",
    maingrowerid: eq.get('grower_id__c'),
    reason: eq.get('reason_notes__c'),
    status: eq.get('status__c'),
    quota_change: eq.get('adjusted__c')

  };
}

function quotaCollectionTransform(eq) {
  //const selfurl = sysutil.serverUrl(req);
  return {
    data : eq.map(quotaTransform),
    almaestimate : 123,
    published_at : "2016-08-13 15:09:25",
    growerid : "A901",
    status : "Success"
  };
}

exports.quotaGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * growerid (String)
  * date (String)
  **/
  const growerid = args.growerid.value;
  console.log('### ID '+growerid);

/*
    var examples = {};
  examples['application/json'] = {
  "data" : eq.map(quotaTransform),
  "almaestimate" : 123,
  "published_at" : "2016-08-13 15:09:25",
  "growerid" : "A901",
  "status" : "Success"
  };
*/
/*
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
*/
  new Quotas().fetch({ grower_id__c: growerid }).then((eq) => {
    const rest_eq = quotaCollectionTransform(eq);
    console.log('\n\nQuota Stringified:\n');
    console.log(JSON.stringify(rest_eq, null, 4));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rest_eq, null, 4));
  });

  
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

