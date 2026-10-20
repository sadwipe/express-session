import bcrypt from 'bcrypt';

import db from '../db/queries.js';

const authController = {
  createUser: async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await db.findUserByName(username);

    if (existingUser) {
      return res.status(409).render('register', {
        errors: [{ msg: 'Username is already taken.' }],
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.createUser(username, hashedPassword);

    res.redirect('/login');
  },

  authenticateUser: async (req, res) => {
    const { username, password } = req.body;

    const user = await db.findUserByName(username);

    if (!user) {
      return res.status(401).render('login', {
        errors: [{ msg: 'Invalid username or password' }],
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).render('login', {
        errors: [{ msg: 'Invalid username or password' }],
      });
    }

    res.render('homepage', { message: 'You are logged in!' });
  },
};

export default authController;
