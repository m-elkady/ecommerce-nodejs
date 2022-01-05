import express from 'express';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import roleMigrate from './src/models/migrations/roles';
import auth from './src/routes/auth';
import home from './src/routes/home';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', auth);
app.use('/', home);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    roleMigrate();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
const port = process.env.PORT || '3000';

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
