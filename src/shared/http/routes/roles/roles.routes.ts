import { Request, Response } from 'express';
import { Router } from 'express';
import { Role } from '../../../../roles/entities/Role';

const rolesRoutes = Router();

const roles: Role[] = [];

rolesRoutes.post('/', (Req: Request, Res: Response) => {
  const name = Req.body.name;

  const role = new Role();

  Object.assign(role, {
    name,
    created_at: new Date(),
  });

  roles.push(role);

  console.log(role);
  Res.status(201).json({ role: role });
});

export default rolesRoutes;
