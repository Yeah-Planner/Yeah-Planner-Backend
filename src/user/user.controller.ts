import { UserService } from './user.service';
import { SignUpDto } from './dto/sign-up-dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  signUp(@Body() data: SignUpDto) {
    return this.userService.signUp(data);
  }
}
