import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async signUp({ email, password, username }: SignUpDto) {
    const dup = await this.userRepository.find({ where: { email } });
    if (dup.length > 0) {
      throw new ConflictException('Email already exists');
    }
    const user = this.userRepository.create({
      email,
      password,
      username,
    });

    return this.userRepository.save(user);
  }
}
