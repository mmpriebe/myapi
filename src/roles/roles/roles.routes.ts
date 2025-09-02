import { Request, Response } from 'express';
import { Router } from 'express';
import RolesRepository from '../repositories/RolesRepository';

const rolesRoutes = Router();

const rolesRepository = new RolesRepository();

rolesRoutes.post('/', async (Req: Request, Res: Response) => {
  const role = await rolesRepository.create(Req.body.name);

  Res.status(201).json({ role: role });
});

export default rolesRoutes;
