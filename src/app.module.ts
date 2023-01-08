import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './cats/logger.middleware';
import { AppController } from './app.controller';
// import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ExamModule } from './exam/exam.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, ExamModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule  {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
