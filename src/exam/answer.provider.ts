import { Answer } from './answer.entity';

export const answerProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useValue: Answer,
  },
];