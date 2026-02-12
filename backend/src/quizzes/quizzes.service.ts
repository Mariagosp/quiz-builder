import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateQuizDto) {
    return this.prisma.quiz.create({
      data: {
        title: dto.title,
        questions: {
          create: dto.questions.map((q) => ({
            title: q.title,
            type: q.type,
            options: q.options ? JSON.stringify(q.options) : undefined,
            correctAnswers: q.correctAnswers
              ? JSON.stringify(q.correctAnswers)
              : undefined,
          })),
        },
      },
      include: { questions: true },
    });
  }

  async findAll() {
    return this.prisma.quiz.findMany({
      select: { id: true, title: true, questions: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.quiz.findUnique({
      where: { id },
      include: { questions: true },
    });
  }

  async remove(id: string) {
    return this.prisma.quiz.delete({ where: { id } });
  }
}
