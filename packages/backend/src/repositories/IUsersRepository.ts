import { User } from '../models/User';

export interface IUsersRepository {
  // Improve this search by changing ids to `where` like here: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
  findMany(ids?: string[]): Promise<User[]>;

  findById(id: string): Promise<User | undefined>;
  create(user: User): Promise<User>;
  deleteById(id: string): Promise<User>; // i guess this shouldn't return User
}
