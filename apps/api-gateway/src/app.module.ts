import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MicroClientModule } from './modules/micro-client/micro-client.module';

@Module({
  imports: [AuthModule, UsersModule, MicroClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
