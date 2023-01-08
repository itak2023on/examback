import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import * as session from 'express-session';


import { Question } from './exam.entity';

const { Op } = require("sequelize");

export class CreateQuestionDto {
  readonly qtext: string;
  readonly trueNum: number;
  readonly isMulti: string;
}

@Injectable()
export class ExamService {
  constructor(
    @Inject('EXAM_REPOSITORY')
    private examRepository: typeof Question,
    @Inject('ANSWER_REPOSITORY')
    private answerRepository: typeof Question

  ) {}

  getHello(): string {
    return 'cats World!';
  }
  async findAll() {
  // async findAll(): Promise<Question[]> {// console.log('aasda')
    const qs = await  this.examRepository.findAll<Question>({
      // attributes: ['Qtext', 'trueNum'], 
      // where: {
      //   trueNum:  {
      //     [Op.eq]: 2
      //   }
      // }
    });
    // console.log(qs.every(user => user instanceof Question));
    // console.log(qs[1].Qtext) ;
    // console.log()
    return JSON.stringify(qs, null, 2)
    
  }

  async startexam() {
      const qs = await  this.examRepository.findAll<Question>({});
      return JSON.stringify(qs, null, 2)
      
    }

  async getAnswers() {
    // async findAll(): Promise<Question[]> {// console.log('aasda')
      const qs = await  this.answerRepository.findAll({});
      return JSON.stringify(qs, null, 2)
      
    }

    async getAnswer(id:number) {
        return await this.answerRepository.findByPk(id);
        
      }
      async putAnswer(id:number, ans) {
        return await this.answerRepository.update(ans, {
          where: {
            id: id
          }
        });
        
      }

      async postAnswer( ans) { 
      return await this.answerRepository.create(ans);
      
    }











  async findpk(id:number){
    const project = await this.examRepository.findByPk(id);
    console.log(project)
    if (project === null) {
      return {aldaa: 'Not found'}
    } else {
      return project
    }
  }

  async findone(wher){ console.log('asdfasdfasdfasfasfasf' ,wher)
    const project = await this.examRepository.findOne({ where: wher });
    if (project === null) {
      console.log('Not found!');
    } else {
      
    }
    return project
  }

  async udpateQ(wher){
    return await this.examRepository.update({ Qtext: wher.val }, {
      where: {
        id: wher.id
      }
    });
  }

  async removeQ(wher){
    return await this.examRepository.destroy( {
      where: {
        id: wher
      }
    });
  }

  // findOne(id: number): Promise<Question> {
  //   return this.examRepository.findOne({ id });
  // }

  async createQuestion(ques: CreateQuestionDto): Promise<Question> {
    return await this.examRepository.create<Question>({Qtext:'aa66', trueNum:3, isMulti:"f" });
  }
}