export class ContactDB {
  constructor(conn) {
    this.conn = conn;
  }

  // menambah data baru
  create({ firstName, lastName, email }) {
    const stmt = this.conn.prepare(
      `INSERT INTO contacts (firstName, lastName, email) VALUES (?,?,?)`
    );
    const { lastInsertRowid } = stmt.run(firstName, lastName, email);
    return { id: lastInsertRowid, firstName, lastName, email };
  }

  // menampilkan data berdasarkan id
  findBy(id) {
    const stmt = this.conn.prepare(`SELECT * FROM contacts WHERE id = ?`);
    return stmt.get(id);
  }

  // update data
  update({ id, firstName, lastName, email }) {
    const stmt = this.conn.prepare(
      `UPDATE contacts
      SET firstName = ?, lastName = ?, email = ? WHERE id = ?`
    );
    const { changes } = stmt.run(firstName, lastName, email, id);
    return changes;
  }

  // delete data
  delete(id) {
    const stmt = this.conn.prepare(`DELETE FROM contacts WHERE id = ?`);
    const { changes } = stmt.run(id);
    return changes;
  }

  // reading all data
  findAll() {
    const stmt = this.conn.prepare(`SELECT * FROM contacts`);
    return stmt.all();
  }
}