import { Role } from '../entities/Role';

type CreateRoleDTO = {
  name: string;
};

class RolesRepository {
  private roles: Role[];

  constructor() {
    this.roles = [];
  }

  async create({ name }: CreateRoleDTO): Promise<CreateRoleDTO> {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);

    return role;
  }
}

export default RolesRepository;
