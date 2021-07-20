import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


import db from './src/config/mongoDb';
import publicRoutes from './src/routes/public';
import apiRoutes from './src/routes/api';
import apiMiddleware from './src/middleware/apiAuth';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();
db.connect();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/pub', publicRoutes);
app.use('/api', apiMiddleware, apiRoutes);

// Image static routing
app.use(express.static(`${__dirname}/public`));

app.use(errorHandler);

module.exports = app;
