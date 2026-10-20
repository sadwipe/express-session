import pool from './pool.js';

const SQL = `
  DROP TABLE IF EXISTS "session";
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  CREATE TABLE "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
  );

  ALTER TABLE "session"
  ADD CONSTRAINT "session_pkey"
  PRIMARY KEY ("sid")
  NOT DEFERRABLE INITIALLY IMMEDIATE;

  CREATE INDEX "IDX_session_expire" ON "session" ("expire");
`;

async function main() {
  try {
    console.log('Seeding...');
    await pool.query(SQL);
    console.log('Done');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await pool.end();
  }
}

main();
