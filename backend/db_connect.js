const mysql = require('mysql');
require('dotenv').config();
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DB = process.env.MYSQL_DB;

const db = mysql.createConnection({

    host: MYSQL_HOST,
 
    user: MYSQL_USER,
 
    password: MYSQL_PASSWORD,

    database: MYSQL_DB
  });

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    var usersTable = "CREATE TABLE IF NOT EXISTS users (id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY ,nickname  VARCHAR(255), email  VARCHAR(255), password VARCHAR(255), admin SMALLINT,profileimg VARCHAR(255), UNIQUE(nickname,email) )";
    db.query(usersTable, function (err, result) {
        if (err) throw err;
        console.log("Table users available");
    });
    var postsTable = "CREATE TABLE IF NOT EXISTS posts (id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY ,nickname  VARCHAR(255), imageUrl  VARCHAR(255), post_text TEXT)";
    db.query(postsTable, function (err, result) {
        if (err) throw err;
        console.log("Table posts available");
    });

});

module.exports = db;