const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19982018',
  database: 'movies'
});

module.exports = conn;