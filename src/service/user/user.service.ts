import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user/user.repository';
import { CreateUserDto } from './dto/CreateUser.dto';
import { FindUserDto } from './dto/FindUser.dto';

@Injectable()
export class UserDomain {
    constructor(private readonly _userRepository: UserRepository) {}

    async listUsers(): Promise<FindUserDto[]> {
        const userList = await this._userRepository.findAll();

        return userList.map((user) => ({
            completeName: `${user.firstName} + ${user.lastName}`,
            firstName: user.firstName,
            id: user.id,
            lastName: user.lastName,
        }));
    }

    async createUser(user: CreateUserDto): Promise<FindUserDto> {
        const newUser = await this._userRepository.create(user);

        return {
            completeName: `${newUser.firstName} + ${newUser.lastName}`,
            firstName: newUser.firstName,
            id: newUser.id,
            lastName: newUser.lastName,
        };
    }
}
