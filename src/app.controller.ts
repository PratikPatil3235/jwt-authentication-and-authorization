import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './users/user.entity';
import { AuthService } from './auth/auth.sevice';
import { RoleGuard } from './role.guard';
import { CONSTRAINTS } from './constraints';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get('/android-developer')
  @UseGuards(
    AuthGuard('jwt'),
    new RoleGuard(CONSTRAINTS.ROALS.ANDROID_DEVELOPER),
  )
  androidDeveloperData(@Request() req): string {
    return `This is PRIVATE DATA  for android developer  ${JSON.stringify(req.user)}`;
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTRAINTS.ROALS.WEB_DEVELOPER))
  webDeveloperData(@Request() req): string {
    return `This is PRIVATE DATA  for web developer ${JSON.stringify(req.user)}`;
  }
}
