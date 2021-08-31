const mysql = require('mysql');
const express =require('express');

const app = express();
const db = mysql.createConnection({

    host: "localhost",
 
    user: "root",
 
    password: "xdwv74DN"
 
  });

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

  module.exports = app