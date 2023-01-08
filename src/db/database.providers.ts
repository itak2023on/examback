import { Sequelize } from 'sequelize-typescript';
import { Answer } from 'src/exam/answer.entity';
import { User } from 'src/users/entities/user.entity';
import { Cat } from '../cats/cat.entity';
import { Question } from '../exam/exam.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Cat, Question, User, Answer]);
    //   sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];