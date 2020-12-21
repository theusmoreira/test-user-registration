import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import db from '../database';
import authConfig from '../config/token';
import AppError from '../helpers/AppError';

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = db.get('users').find({ email }).value();

    if (!user) {
      throw new AppError('Incorret email/password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorret email/password combination', 401);
    }

    const { secret } = authConfig.jwt;

    const token = sign(user.id, secret);

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
