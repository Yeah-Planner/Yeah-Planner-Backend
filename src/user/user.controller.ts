import { UserService } from './user.service';
import { SignUpDto } from './dto/sign-up-dto';
import { Body, Controller, Post } from '@nestjs/common';
import { SHA256 } from 'crypto-js';

@Controller('user')
export class UserController {
  private readonly crypt: (str: string) => string;

  constructor(private readonly userService: UserService) {
    this.crypt = (str: string) => SHA256(str).toString();
  }

  @Post()
  signUp(@Body() data: SignUpDto) {
    return this.userService.signUp(data, this.crypt);
  }
}
