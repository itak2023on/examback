import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat
  ) {}

  getHello(): string {
    return 'cats World!';
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }
}