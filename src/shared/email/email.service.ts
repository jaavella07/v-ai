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
        user: configService.get('EMAIL_USER'),
        pass: configService.get('EMAIL_PASSWORD'),
      },
    });
  }

  async sendNotification(): Promise<void> {
    await this.transporter.sendMail({
      from: '"V-AI Support" <support@v-ai.com>',
      to: 'admin@v-ai.com',
      subject: 'Nueva solicitud de factura',
      text: 'Se activó un trigger para envío de factura',
    });
  }
}