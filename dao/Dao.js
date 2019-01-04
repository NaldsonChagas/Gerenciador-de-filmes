const QueryByTable = require('../utils/QueryByTable');

const CreateConnection = require('../utils/CreateConnection');

module.exports = class Dao {

  constructor(table) {
    this._conn = CreateConnection.create();
    this._table = table;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query(`SELECT * FROM ${this._table}`, (err, results, fields) => {
          if (err) reject(err);
          resolve(results);
        });

      });
    });
  }

  listOne(id) {
    const sql = `SELECT * FROM ${this._table} WHERE id = ?`;
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query(sql, [id], (err, result, fields) => {
          if (err) reject(err);
          resolve(result);
        });

      });
    });
  }

  insert(values) {
    const sql = QueryByTable.insertQuery(this._table);
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
    const sql = `DELETE FROM ${this._table} WHERE id = ?`;
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query(sql, [id], (err, result, fields) => {
          if (err) reject(err);
          resolve(result);
        });

      });
    });
  }

  update(values) {
    const sql = QueryByTable.updateQuery(this._table);
    return new Promise((resolve, reject) => {
      this._conn.connect(() => {

        this._conn.query(sql, values, (err, result, fields) => {
          if (err) reject(err);
          resolve(result)
        });

      });
    });
  }
}