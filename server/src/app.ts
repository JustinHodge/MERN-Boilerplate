import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';
import Database from './database';

dotenv.config({ path: './config.env' });

const app = express();
const database = new Database();

// try {
//     database.connectDB();
// } catch (error) {
//     console.log(error);
// }

app.use(routes);

export default app;
