import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/shared';


@Injectable()
export class TriggersService {
    
  constructor(private emailService: EmailService) {}

  checkTrigger(content: string): boolean {
    const TRIGGER_WORDS = ['email'];
    const hasTrigger = TRIGGER_WORDS.some(word => 
      content.toLowerCase().includes(word)
    );

    if (hasTrigger) {
      // Lógica adicional (ej: enviar email)
      this.emailService.sendNotification();
    }

    return hasTrigger;
  }
}