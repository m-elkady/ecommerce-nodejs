import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config';
import roleMigrate from './src/models/migrations/roles';
import auth from './src/routes/auth';
import home from './src/routes/home';

const app = express();
app.use(express.json());
app.use('/', auth);
app.use('/', home);

const dbUrl: string = process.env.DB_URL || 'mongodb://127.0.0.1:27017/ecommerce_db';

mongoose
  .connect(dbUrl)
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
