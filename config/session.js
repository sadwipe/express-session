import 'dotenv/config';

import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';

import pool from '../db/pool.js';

const PgStore = connectPgSimple(session);

export default session({
  store: new PgStore({
    pool: pool,
    tableName: 'session',
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
});
