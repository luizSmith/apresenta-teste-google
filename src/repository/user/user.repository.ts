import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/service/user/dto/CreateUser.dto';
import { Connection, Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserRepository {
    private userRepository: Repository<User>;
    constructor(private connection: Connection) {
        this.userRepository = this.connection.getRepository('user');
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user: CreateUserDto): Promise<User> {
        return this.userRepository.create(user);
    }
}
