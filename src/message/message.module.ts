import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { TriggersModule } from './triggers/triggers.module';
import { OpenAIModule } from 'src/shared/openai/openai.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MessageModule,
    TriggersModule,
    OpenAIModule,
    UsersModule,
    ConfigModule.forRoot({}),
    TypeOrmModule.forFeature([
      Message
    ])
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule { }
