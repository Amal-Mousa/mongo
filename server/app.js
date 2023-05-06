import { } from 'dotenv/config' //* to define environment variables in a .env file and load them into the application 
import express from 'express';
import router from './router/router.js';

const app = express();

app.set('PORT', process.env.PORT || 5000);

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  router
]);

export default app;