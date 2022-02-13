import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
	@IsNotEmpty()
  @IsString()
  content: string;
}
