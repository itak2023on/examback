import { Question } from './exam.entity';

export const examProviders = [
  {
    provide: 'EXAM_REPOSITORY',
    useValue: Question,
  },
];