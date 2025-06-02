import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      name: 'user1',
      password: '1234',
      age: 21,
      email: 'user@gmail.com',
    },
    {
      name: 'user2',
      password: '1234',
      age: 21,
      email: 'user2@gmail.com',
    },
    {
      name: 'user3',
      password: '1234',
      age: 21,
      email: 'user3@gmail.com',
    },
    ];
    
    getUserByUSerName(userName: string) :User | undefined{
        return this.users.find((user:User)=>(user.name===userName))
    }
}
