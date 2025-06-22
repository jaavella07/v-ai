import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai'; // Importación principal corregida

@Injectable()
export class OpenAIService {
  // La instancia ahora es directamente del tipo 'OpenAI'
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    // La inicialización es más directa
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      // El método para crear la completación ha cambiado
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        // Para los modelos de chat, se usa un array de "messages"
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente virtual que siempre responde cortésmente.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 150,
      });

      // La forma de acceder a la respuesta también cambió
      return response.choices[0]?.message?.content?.trim() ?? 'Lo siento, no pude procesar tu solicitud en este momento.';
    } catch (error) {
      console.error('Error con OpenAI:', error);
      // Es buena práctica devolver un error o un mensaje más específico
      // si la API falla, en lugar de un mensaje genérico.
      throw new Error('Hubo un problema al contactar el servicio de OpenAI.');
    }
  }
}