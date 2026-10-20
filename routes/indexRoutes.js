import { Router } from 'express';

import indexController from '../controllers/indexController.js';

const indexRouter = Router();

indexRouter.get('/', indexController.getHomepage);
indexRouter.get('/login', indexController.getLoginPage);
indexRouter.get('/register', indexController.getRegisterPage);

export default indexRouter;
