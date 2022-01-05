import express from 'express';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import dbConfig from './src/config/db.config';
import roleMigrate from './src/models/migrations/roles';
import auth from './src/routes/auth';
import home from './src/routes/home';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', auth);
app.use('/', home);

mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    roleMigrate();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// start the Express server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`);
});
