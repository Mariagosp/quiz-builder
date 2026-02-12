import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private quizzesService: QuizzesService) {}

  @Post()
  create(@Body() dto: CreateQuizDto) {
    return this.quizzesService.create(dto);
  }

  @Get()
  getQuizzes() {
    return this.quizzesService.findAll();
  }

  @Get(':id')
  getQuiz(@Param('id') id: string) {
    return this.quizzesService.findOne(id);
  }

  @Delete(':id')
  removeQuizzes(@Param('id') id: string) {
    console.log('remove id', id)
    return this.quizzesService.remove(id);
  }
}
