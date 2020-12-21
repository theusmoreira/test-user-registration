import { Joi, celebrate, Segments } from 'celebrate';

export default celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
  },
);
