/**
 * Created by Nazania Barraza on 11/29/2016.
 */

var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Company;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(company_id, callback) {
    var query = 'SELECT * FROM Company WHERE company_id = ?';
    var queryData = [company_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};