import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';
import db from '../database';
import AppError from '../helpers/AppError';

class CreateUserService {
  async execute({ name, email, password }) {
    const userAlreadyExits = db.get('users').find({ email }).value();

    if (userAlreadyExits) {
      throw new AppError('Email is already in use');
    }

    const passwordHashed = await hash(password, 8);

    const user = db
      .get('users')
      .push({
        id: uuid(),
        name,
        email,
        password: passwordHashed,
      })
      .last()
      .write();
    delete user.password;
    return user;
  }
}

export default CreateUserService;
