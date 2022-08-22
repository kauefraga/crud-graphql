import { User } from '../../models/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IDeleteUserRequestDTO } from './DeleteUserDTO';

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IDeleteUserRequestDTO): Promise<User> {
    const user = await this.usersRepository.deleteById(data.id);

    return user;
  }
}
