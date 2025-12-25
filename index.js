import { DatabaseSync } from 'node:sqlite';

// open a database connection
const db = new DatabaseSync('db.sqlite');

// create a new table
db.exec(`create table if not exists contacts(
  id integer primary key,
  firstName text not null,
  lastName text not null,
  email text not null
  )`
)

// insert a new row
const stmt = db.prepare(
  `INSERT INTO contacts (firstName, lastName, email) VALUES (?, ?, ?)`
);

const { lastInsertRowid } = stmt.run('John', 'Doe', 'johndoe@example.com');

console.log(`Inserted contact id :${lastInsertRowid}`);

// close the database
if (db) db.close();