import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate as uuidValidate } from 'uuid';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

  ) { }

  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findById(id: string) {

    if (!uuidValidate(id)) {
      console.warn(`Intento de búsqueda con ID inválido: ${id}`);
      return null; 
    }
    return this.userRepository.findOne({
      where: { id }
    });
  }

}
