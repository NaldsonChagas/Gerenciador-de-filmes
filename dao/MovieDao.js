module.exports = class MovieDao {

  constructor(conn) {
    this._conn = conn;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._conn.connect((err) => {

        this._conn.query('SELECT * FROM Movies', (err, results, fields) => {
          if (err) reject(err);
          resolve(results);
        });

      });
    });
  }
}