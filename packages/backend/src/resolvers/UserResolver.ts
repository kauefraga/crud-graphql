import { randomUUID } from 'crypto';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../models/User';
import { PostgresUsersRepository } from '../repositories/implementations/PostgresUsersRepository';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { CreateUserUseCase } from '../useCases/CreateUser/CreateUserUseCase';

@Resolver()
export class UserResolver {
  constructor(
    // Remove `usersRepository`
    private usersRepository: IUsersRepository,
    private createUserUseCase: CreateUserUseCase
  ) {
    this.usersRepository = new PostgresUsersRepository();
    this.createUserUseCase = new CreateUserUseCase(this.usersRepository);
  }

  @Query(() => [User])
  async users() {
    // Create a ListUsersUseCase instead
    return this.usersRepository.findMany();
  }

  @Mutation(() => User)
  async createUser(@Arg('name') name: string) {
    const user = await this.createUserUseCase.execute({
      id: randomUUID(),
      name,
    });

    return user;
  }
}
