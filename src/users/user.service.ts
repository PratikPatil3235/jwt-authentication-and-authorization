import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTRAINTS } from 'src/constraints';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      name: 'user1',
      password: '1234',
      age: 21,
      email: 'user@gmail.com',
      roal: CONSTRAINTS.ROALS.ANDROID_DEVELOPER,
    },
    {
      name: 'user2',
      password: '1234',
      age: 21,
      email: 'user2@gmail.com',
      roal: CONSTRAINTS.ROALS.WEB_DEVELOPER,
    },
    {
      name: 'user3',
      password: '1234',
      age: 21,
      email: 'user3@gmail.com',
      roal: CONSTRAINTS.ROALS.ANDROID_DEVELOPER,
    },
  ];

  getUserByUSerName(userName: string): User | undefined {
    return this.users.find((user: User) => user.name === userName);
  }
}
