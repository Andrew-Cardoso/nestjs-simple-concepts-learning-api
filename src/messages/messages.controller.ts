import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  private _messagesService = new MessagesService();

  constructor() {}

  @Get()
  listMessages() {
    return this._messagesService.findAll();
  }

  @Post()
  createMessage(@Body() { content }: CreateMessageDto) {
    return this._messagesService.create(content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this._messagesService.findOne(id);
    if (!message) throw new NotFoundException('message not found');

    return message;
  }
}
