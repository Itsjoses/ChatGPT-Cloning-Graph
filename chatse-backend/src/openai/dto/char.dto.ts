import { IsNotEmpty, IsString } from 'class-validator';

export class ChatDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
