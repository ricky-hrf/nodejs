import { DB } from './07 sqlite demo/DB.js';
import { ContactDB } from './07 sqlite demo/ContactDB.js';

// open a database connection
const db = new DB('db.sqlite');

const contactDB = new ContactDB(db.conn);
// const contact = contactDB.create({
//   firstName: 'hery',
//   lastName: 'utomo',
//   email: 'heriutomo@example.com',
// }
// );

// const contact = contactDB.findBy(2)

// contact.firstName = 'Ricky';
// contact.lastName = 'Sendoro';
// contact.email = 'rickysendoro@example.com'

// apply the changes to the database
// contactDB.update(contact);
// console.log(contact);

// contactDB.delete(2);

// reading all rows from table
const data = contactDB.findAll()
console.log(data)

// tutup database
db.close();