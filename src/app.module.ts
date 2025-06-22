import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MessageModule } from './message/message.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Message } from './message/entities/message.entity';
import { DatabaseModule } from './common';


@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    MessageModule,
  ]
})
export class AppModule { }
