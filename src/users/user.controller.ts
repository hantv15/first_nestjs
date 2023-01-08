import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  getSum(): string {
    const a = 1;
    const b = 1;
    return this.userService.getSum(a, b);
  }
}
