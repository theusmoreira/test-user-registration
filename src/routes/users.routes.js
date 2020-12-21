import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import CreateUserValidator from '../validators/createUser';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', CreateUserValidator, usersController.index);

export default usersRouter;
