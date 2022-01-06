import express, { Request, Response } from 'express';
import AuthController from "../controllers/AuthController";
import verifySignUp from "../middlewares/verifySignUp";

const app = express.Router();
const controller = new AuthController();

app.post('/login', (req: Request, res: Response) => {
  controller.login(req, res);
});

app.post('/register',[
  verifySignUp.checkDuplicateUsernameOrEmail,
  verifySignUp.checkRolesExisted
], (req: Request, res: Response) => {
  controller.register(req, res);
});

export default app;