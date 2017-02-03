//core module dependencies
var util    = require('util');
var mysql   = require('mysql');

//import secrets file
var secrets = require('./secrets.json');



var connection = mysql.createConnection({
    host:       secrets.host,
    port:       secrets.port,
    user:       secrets.user,
    password:   secrets.password,
    database:   secrets.database
});

var returnData = {};


function getData(){    

    connection.query('select * from tbl1', function(err, rowData, fields) {
        if (err) throw err;             
        
        returnData = rowData;
        util.log('SQLJS',returnData);
               
    });

    connection.end();

    return returnData;

}



module.exports = {    
    getData: getData
}


