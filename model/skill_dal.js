/**
 * Created by Nazania Barraza on 11/29/2016.
 */

var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Skill;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(skill_id, callback) {
    var query = 'SELECT * FROM Skill WHERE skill_id = ?';
    var queryData = [skill_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};