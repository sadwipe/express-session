import 'dotenv/config';

import path from 'node:path';
import express from 'express';

import authRouter from './routes/authRoutes.js';
import indexRouter from './routes/indexRoutes.js';

const __dirname = import.meta.dirname;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(indexRouter);
app.use(authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}/`);
});
