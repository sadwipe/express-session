import pool from './pool.js';

const queries = {
  createUser: async (username, password) => {
    const SQL = `
      INSERT
      INTO users (username, password)
      VALUES ($1, $2)
    `;
    await pool.query(SQL, [username, password]);
  },

  findUserByName: async (username) => {
    const SQL = `
      SELECT *
      FROM users
      WHERE username = $1
    `;

    const { rows } = await pool.query(SQL, [username]);
    return rows[0] || null;
  },
};

export default queries;
