import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/shared';


@Injectable()
export class TriggersService {

  constructor(private emailService: EmailService) { }

  async checkTrigger(content: string,userEmail: string): Promise<boolean> {

    const hasTrigger = content.toLowerCase().includes('email');
    if (hasTrigger) {
      
      await this.emailService.sendNotification(userEmail)
      return true;
    }
    return false;
  }
}