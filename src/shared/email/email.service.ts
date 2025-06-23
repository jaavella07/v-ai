import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
    
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
    });
  }

  async sendNotification(userEmail: string): Promise<void> {
    await this.transporter.sendMail({
      from: '"V-AI Support" <support@v-ai.com>',
      to: userEmail,
      subject: 'Confirmación de tu solicitud',
      text: 'Hemos recibido tu solicitud y estamos procesándola.',
    });
  }
}