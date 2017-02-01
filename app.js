//node core module dependencies
var express = require('express');
var util    = require('util');


//app module dependencies
var sql     = require('./sql.js');


util.log("Connecting to DB...");
sql.connect();


