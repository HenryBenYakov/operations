import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import { config } from './config';
import { errorHandler } from './middlewares/error-handler';
import { operationsRouter } from './operations/operations.controller';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);




// JSON parse the request body
app.use(express.json());

app.use('/api/v1/operations', operationsRouter);

// generic error handler
app.use(errorHandler);

(async () => {
  try {
    // connect to mongodb
    await mongoose.connect('mongodb://localhost:27017/admin', {
      user: config.mongoUser,
      pass: config.mongoPass,
      dbName: 'BankAccount',
    });
    console.log('Connected to MongoDB');
    app.listen(config.port, () => {
      console.log(`Listening on ${config.port}`);
    });
  } catch (err) {
    console.log('failed');
    console.log(err);
    // terminate the process in case of db connection failure
    process.exit(1);
  }
})();
