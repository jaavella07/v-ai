import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { TriggersService } from './triggers/triggers.service';
import { OpenAIService } from 'src/shared/openai/openai.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MessageService {

    constructor(
        @InjectRepository(Message)
        private messagesRepository: Repository<Message>,
        private triggersService: TriggersService,
        private openAIService: OpenAIService,
        private usersService: UsersService,
    ) { }

    async createMessage(userId: string, content: string): Promise<Message> {

        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
        }

        const isTriggered = await this.triggersService.checkTrigger(content, user.email);

        const response = isTriggered
            ? "Recibimos tu solicitud. En breve recibirás un email."
            : await this.openAIService.generateResponse(content);

        const message = this.messagesRepository.create({
            content,
            response,
            isTriggered,
            user,
        });

        return this.messagesRepository.save(message);
    }

    async getHistory(userId: string): Promise<Message[]> {
        return this.messagesRepository.find({
            where: { user: { id: userId } },
            relations: ['user'],
        });
    }

    async getUserStats(userId: string) {
        
        const totalMessages = await this.messagesRepository.count({
            where: { user: { id: userId } }
        });
        const totalTriggers = await this.messagesRepository.count({
            where: {
                user: { id: userId },
                isTriggered: true
            },
        });
        return {
            message: `El usuario con ID ${userId} ha enviado un total de ${totalMessages} mensajes y ha activado ${totalTriggers} disparadores.`,
        }
    }

}