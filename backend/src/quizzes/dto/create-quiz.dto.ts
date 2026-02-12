import { IsString, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateQuestionDto {
  @IsString()
  title: string

  @IsString()
  type: 'BOOLEAN' | 'INPUT' | 'CHECKBOX'

  options?: string[]
  correctAnswers?: string[]
}

export class CreateQuizDto {
  @IsString()
  title: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[]
}
