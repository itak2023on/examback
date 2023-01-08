import { Module } from '@nestjs/common';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { examProviders } from './exam.providers';
import { answerProviders } from './answer.provider';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [
    ExamService,
    ...examProviders,
    ...answerProviders,
  ],
})
export class ExamModule {}