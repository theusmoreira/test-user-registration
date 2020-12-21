import { Router } from 'express';
import path from 'path';

import SessionsController from '../controllers/SessionsController';
import AuthenticateUserValidator from '../validators/authUser';

const sessionsRouter = Router();

const sessionsController = new SessionsController();

const publicPath = path.join(__dirname, '..', 'public');

sessionsRouter
  .get('/sign-in', (req, res) => res.sendFile(`${publicPath}/login.html`))
  .get('/sign-up', (req, res) => res.sendFile(`${publicPath}/register.html`))
  .post('/sessions', AuthenticateUserValidator, sessionsController.create);

export default sessionsRouter;
