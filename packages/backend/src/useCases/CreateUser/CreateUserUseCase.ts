import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findById(data.id);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = await this.usersRepository.create(data);

    return user;
  }
}
