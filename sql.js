//core module dependencies
var util    = require('util');
var mysql   = require('mysql');

//import secrets file
var secrets = require('./secrets.json');



var connectionString = mysql.createConnection({
    host:       secrets.host,
    port:       secrets.port,
    user:       secrets.user,
    password:   secrets.password,
    database:   secrets.database
});

function connectToDB(){
    try{
        connectionString.connect();
    }catch(error){
        util.debug(error);
    }
}


module.exports = {
    connect: connectToDB
}


