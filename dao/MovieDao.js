const CreateConnection = require('../utils/CreateConnection');

module.exports = class MovieDao {

  constructor() {
    this._conn = CreateConnection.create();
  }

  list() {
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query('SELECT * FROM Movies', (err, results, fields) => {
          if (err) reject(err);
          resolve(results);
        });

      });
    });
  }

  insert(values) {
    const sql = 'INSERT INTO Movies (title, description, author_id) values (?)';
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query(sql, [values], (err, result, fields) => {
          if (err) reject(err);
          resolve(result);
        });

      });
    });
  }

  delete(id) {
    const sql = 'DELETE FROM Movies WHERE id = ?';
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query(sql, [id], (err, result, fields) => {
          if (err) reject(err);
          resolve(result);
        });

      });
    });
  }
}