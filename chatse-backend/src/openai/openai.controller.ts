import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { ChatDto } from './dto/char.dto';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chat')
  async chat(@Body() { message, type }: ChatDto) {
    return this.openaiService.generateResponse(message, type);
  }
}
