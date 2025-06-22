import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {

    constructor(
        private messageService: MessageService,
        private usersService: UsersService,
    ) { }

    @Post()
    async createMessage(
        @Body('user_id') userId: string,
        @Body('message') content: string,
    ) {
        const user = await this.usersService.findById(userId);
        if (!user) throw new NotFoundException('Usuario no encontrado');

        return this.messageService.createMessage(user, content);
    }
}
