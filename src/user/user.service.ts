import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LogInDto } from './dto/log-in-dto';
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

  async signUp(
    { email, password, username }: SignUpDto,
    crypt: (e: string) => string,
  ) {
    const dup = await this.userRepository.find({ where: { email } });
    if (dup.length > 0) {
      throw new ConflictException('Email already exists');
    }
    const user = this.userRepository.create({
      email,
      password: crypt(password),
      username,
    });

    return this.userRepository.save(user);
  }

  async login({ email, password }: LogInDto, crypt: (e: string) => string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('Email does not match');
    }
    if (user.password !== crypt(password)) {
      throw new ForbiddenException('Password does not match');
    }
    return user;
  }
}
