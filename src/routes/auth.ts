import express from 'express';
import AuthController from "../controllers/AuthController";
import verifySignUp from "../middlewares/verifySignUp";

const app = express.Router();
const controller = new AuthController();

app.post('/login', (req, res) => {
  controller.login(req, res);
});

app.post('/register',[
  verifySignUp.checkDuplicateUsernameOrEmail,
  verifySignUp.checkRolesExisted
], (req, res) => {
  controller.register(req, res);
});

export default app;