import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import db from '../database';

// import tokenConfig from '../config/token';
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

    // const { secret, expiresIn } = tokenConfig.jtw;

    // console.log(secret);

    delete user.password;

    const token = sign(user, 'olamundo');

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
