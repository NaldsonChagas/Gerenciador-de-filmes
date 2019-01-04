const mysql = require('mysql');

module.exports = class CreateConnection {

  static create() {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '19982018',
      database: 'movies'
    });
  }

}