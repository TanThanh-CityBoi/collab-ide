import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MicroClientModule } from './micro-client/micro-client.module';

@Module({
  imports: [AuthModule, UsersModule, MicroClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
