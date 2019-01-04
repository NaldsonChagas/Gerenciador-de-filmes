module.exports = class QueryByTable {

  static insertQuery(table) {
    if (table === 'Movie')
      return `INSERT INTO Movie (title, description, director_id) values (?)`;
    else 
      return `INSERT INTO Director (name) VALUES (?)`;
  }

  static updateQuery(table) {
    if (table === 'Movie') 
      return `UPDATE Movies SET title = ?, description = ?, director_id = ? WHERE id = ?`;
    else 
      return `UPDATE Director SET name = ? WHERE id = ?`;
  }

}