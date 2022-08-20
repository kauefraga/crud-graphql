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
    return user
  }

  async delete(user: User): Promise<void> {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
