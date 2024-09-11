import { IsNotEmpty } from 'class-validator';

export class CreateQuestionnaireDto {
  @IsNotEmpty()
  title?: string;

  @IsNotEmpty()
  description?: string;
}