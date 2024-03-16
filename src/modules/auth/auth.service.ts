import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user: any = await this.userService.getUser(userName);

    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return user;
  }

  generateToken(user: any) {
    return {
      user,
      access_token: this.jwtService.sign({
        name: user.name,
        sub: user.id,
      }),
    };
  }

  async checkUser(payload: any): Promise<any> {
    const user = await this.userService.getUserById(payload.sub);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
