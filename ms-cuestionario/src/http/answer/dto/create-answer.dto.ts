// create-answer.dto.ts
import { IsNotEmpty } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  questionId?: string;

  @IsNotEmpty()
  answer?: string;
}