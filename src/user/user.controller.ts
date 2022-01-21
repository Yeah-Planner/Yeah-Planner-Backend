import { UserService } from './user.service';
import { SignUpDto } from './dto/sign-up-dto';
import { Body, Controller, HttpCode, Post, Get, Query } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { LogInDto } from './dto/log-in-dto';
import { GetUserDto } from './dto/get-user-dto';

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

  @Post('/login')
  @HttpCode(200)
  login(@Body() data: LogInDto) {
    return this.userService.login(data, this.crypt);
  }

  @Get()
  getUser(@Query() data: GetUserDto) {
    return this.userService.getUser(data);
  }
}
