import low from 'lowdb';
import path from 'path';
import FileSync from 'lowdb/adapters/FileSync';

const databaseDestination = path.join(__dirname, 'db.json');

const adapter = new FileSync(databaseDestination);

const db = low(adapter);

db.defaults({ users: [] }).write();

export default db;
