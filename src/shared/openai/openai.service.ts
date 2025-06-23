import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {

  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({ apiKey: this.configService.get<string>('OPENAI_API_KEY') });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });
      return response.choices[0]?.message?.content?.trim() ?? 'Lo siento, no pude procesar tu solicitud en este momento.';
    } catch (error) {
      console.error('Error con OpenAI:', error);
      throw new Error('Hubo un problema al contactar el servicio de OpenAI.');
    }
  }
}