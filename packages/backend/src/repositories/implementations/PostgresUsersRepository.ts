import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../models/User';

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findMany(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);

    return user ? user : undefined;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async deleteById(id: string): Promise<User> {
    for (const user of this.users) {
      if (user.id === id) {
        this.users.splice(this.users.indexOf(user), 1);
        return user;
      }
    }
    throw new Error(`User ${id} does not found`);
  }
}
