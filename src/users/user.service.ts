import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getSum(a: number, b: number): string {
    return `a + b = ${a + b}`;
  }
}
