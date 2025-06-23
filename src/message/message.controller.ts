import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {

    constructor(
        private messageService: MessageService,
        private usersService: UsersService,
    ) { }

    @Post()
    async createMessage(@Body('user_id') userId: string, @Body('message') content: string
    ) {
        return this.messageService.createMessage(userId, content);
    }

    @Get('/history')
    async getHistory(@Query('user_id') userId: string) {
        return this.messageService.getHistory(userId);
    }
    @Get('/status')
    async getStats(@Query('user_id') userId: string) {
        return this.messageService.getUserStats(userId);
    }

}
