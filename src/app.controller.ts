import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './users/user.entity';
import { AuthService } from './auth/auth.sevice';

@Controller('auth')
export class AppController {
  constructor(private readonly authService:AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req): string {
  return this.authService.generateToken(req.user);
  }

  @Get('/android-developer')
    @UseGuards(AuthGuard('jwt'))
  androidDeveloperData():string {
    return `This is PRIVATE DATA  for android developer`
  }
}
