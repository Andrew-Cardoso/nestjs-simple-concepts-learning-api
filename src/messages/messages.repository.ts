import { readFile, writeFile } from 'fs/promises';
import { v4 as uuid } from 'uuid';

export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.findAll();
    return messages.find((msg) => msg.id === id);
  }

  async findAll() {
    return JSON.parse(await readFile('messages.json', 'utf-8'));
  }
  async create(content: string) {
    const messages = await this.findAll();
    messages.push({
      id: uuid(),
      content,
    });

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
