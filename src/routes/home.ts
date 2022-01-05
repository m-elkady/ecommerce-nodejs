import express from 'express';

const app = express.Router();

app.get("/", (req, res) => {
  res.send("Our Home Page");
});

export default app;