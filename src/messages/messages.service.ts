import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private _messagesRepo = new MessagesRepository();
  constructor() {}

  findOne(id: string) {
    return this._messagesRepo.findOne(id);
  }

  findAll() {
    return this._messagesRepo.findAll();
  }

  create(content: string) {
    return this._messagesRepo.create(content);
  }
}
