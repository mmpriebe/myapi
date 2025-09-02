import { Router } from 'express';

const rolesRoutes = Router();

rolesRoutes.get('/roles', (request, response) => {
  response.send({ message: 'roles' });
});

export default rolesRoutes;
