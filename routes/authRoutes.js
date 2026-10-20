import { Router } from 'express';

import authController from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', authController.createUser);

authRouter.post('/login', authController.authenticateUser);

authRouter.post('/logout', (req, res) => {});

export default authRouter;
