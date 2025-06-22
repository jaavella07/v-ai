import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './common';
import { UsersModule } from './users/users.module';
import { MessageModule } from './message/message.module';
import { EmailModule } from './shared/email/email.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    MessageModule,
    EmailModule,
  ]
})
export class AppModule { }
