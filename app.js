//node core module dependencies
var express = require('express');
var util    = require('util');


//app module dependencies
var sql     = require('./sql.js');


//variables
var retVals = {};




function init(){

    getData(function(data){
        retVals = data;
        util.log('appjs', retVals);
    });
    
}


function getData(callback){
    var sqlData = {};
    sqlData = sql.getData();    
    callback(sqlData);
}


//begin execution
init();










