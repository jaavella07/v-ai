import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { TriggersService } from './triggers/triggers.service';
import { OpenAIService } from 'src/shared/openai/openai.service';
import { User } from 'src/users/entities/user.entity';



@Injectable()
export class MessageService {

    constructor(
        @InjectRepository(Message)
        private messagesRepository: Repository<Message>,
        private triggersService: TriggersService,
        private openAIService: OpenAIService,
    ) { }

    async createMessage(user: User, content: string): Promise<Message> {
        // 1. Procesar triggers
        const isTriggered = this.triggersService.checkTrigger(content);

        // 2. Generar respuesta
        const response = isTriggered
            ? "Recibimos tu solicitud. En breve recibirás un email."
            : await this.openAIService.generateResponse(content);

        // 3. Guardar mensaje
        const message = this.messagesRepository.create({
            content,
            response,
            isTriggered,
            user,
        });

        return this.messagesRepository.save(message);
    }

    // async getHistory(userId: number): Promise<Message[]> {
    //     return this.messagesRepository.find({
    //         where: { user: { id: userId } },
    //         relations: ['user'],
    //     });
    // }

}
