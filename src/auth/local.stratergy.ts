import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-local';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({ usernameField: 'username', passwordField: 'password' });
  }

  async validate(username: string, password: string): Promise<User> {
    const user = this.userService.getUserByUSerName(username);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
