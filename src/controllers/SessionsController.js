import AuthenticateUserService from '../services/AuthenticateUserService';

export default class SessionsController {
  async create(request, response) {
    try {
      const { email, password } = request.body;

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute({
        email,
        password,
      });

      return response.json({ user, token });
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message });
    }
  }
}
