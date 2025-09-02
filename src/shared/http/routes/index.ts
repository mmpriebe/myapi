import { Router } from 'express';
import rolesRoutes from '../../../roles/roles/roles.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.send({ message: 'ok' });
});

routes.use('/roles', rolesRoutes);

export default routes;
