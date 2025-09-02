import { Router } from 'express';
import AppError from '../../errors/AppError';

const routes = Router();

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado', 401);

  response.send({ message: 'ok' });
});

export default routes;
