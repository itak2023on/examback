import { Controller, Injectable, NestMiddleware,UseGuards,Session, Req, Get, Post,HttpCode, Header, Redirect, Query, Param, Body, Res, HttpStatus, Delete, Put   } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CreateQuestionDto, ExamService } from './exam.service';
// import { AuthGuard } from './auth.guard';
// import { RolesGuard } from './roles.guard';

import { CreateqDTO} from './createq.dto';

@Controller('exam')
// @UseGuards(RolesGuard)
export class ExamController {

    constructor(private readonly examService: ExamService) {}

    @Get('questions')   //"exposedHeaders": "X-Total-Count"
    @Header('Access-Control-Expose-Headers', 'X-Total-Count')
    @Header('X-Total-Count', '10')
    getHello() {
      return this.examService.findAll();
    }

    @Get('startexam')   //"exposedHeaders": "X-Total-Count"
    @Header('Access-Control-Expose-Headers', 'X-Total-Count')
    @Header('X-Total-Count', '10')
    startexam(@Req() request: Request) {//console.log('session', request.session.id, request.session.visits)
    // request.session.visits = true; 
      // request.session.visits = true;//

      // request.session.visits = request.session.visits ? request.session.visits + 1 : 1;

      return this.examService.startexam();
    }

    @Get('answers')   
    @Header('Access-Control-Expose-Headers', 'X-Total-Count')
    @Header('X-Total-Count', '10')
    getAnswers() {
        return this.examService.getAnswers();    
      
    }

    @Get('answers/:id')   
    @Header('Access-Control-Expose-Headers', 'X-Total-Count')
    @Header('X-Total-Count', '10')
    async getAnswer(@Param('id') id) {
      let x = this.examService.getAnswer(id); console.log('x', x)
     
      // res.status(HttpStatus.AMBIGUOUS).send();
      return x;
      
    }

    @Put('answers/:id')   
    @Header('Access-Control-Expose-Headers', 'X-Total-Count')
    @Header('X-Total-Count', '10')
    putAnswer(@Param('id') id, @Body() ans) {
      return this.examService.putAnswer(id, ans);
      
    }

    @Post('answers')   
    @Header('Access-Control-Expose-Headers', 'X-Total-Count')
    @Header('X-Total-Count', '10')
    postAnswer( @Body() ans: CreateqDTO) {
      return this.examService.postAnswer(ans);
      
    }

  

    @Get('create')
    createQuestion() {
    return this.examService.createQuestion({qtext:'aa55', trueNum:3, isMulti:"f" });
    //  return "haha"
    }


    @Get('fone')
    findone(@Query('version') version){ 
      return this.examService.findone({Qtext: version});
    }

    @Get(':id')
    findpk(@Param('id') id) {
    return this.examService.findpk(id);
    //  return "haha"
    }


    @Put(':id')
    udpateQ(@Param('id') id, @Query('val') val) {
      return this.examService.udpateQ({id:id, val:val});
    }

    @Delete(':id')
    removeQ(@Param('id') id) {
      return this.examService.removeQ(id);
    }

    @Post('pi')
    postHello(@Res() res: Response) {//library-specific gene deere import hiideg blhoor
        res.status(HttpStatus.AMBIGUOUS).send();  //@HttpCode(204)  iin oor songolt gene.
    }
    
  // @Get()   //200 butsadag
  // @Get(':id')
  // @Get('ab*cd')
  // @Redirect('https://nestjs.com', 301)
  // @Redirect('https://docs.nestjs.com', 302)
  // getHello(): string {
  // getHello(@Query('version') version) {
    // getHello(@Param() params): string {
  // getHello(@Param('id') id): string {
      // console.log(params.id);
      // return `This action returns a #${params.id} cat`;
      // return `This action returns a #${id} cat`;

    // return this.appService.getHello();

    // if (version && version === '5') {
    //   return { url: 'https://docs.nestjs.com/v5/' };
    // }
  // }

  // @Get('fall')
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

//   @Get()
// findAll(): Observable<any[]> {
//   return of([]);
// }

  @Post() //201 butsaadag
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  
  create(): string {
    return 'This action adds a new cat';
  }

  // @Post('bdy')
  // async bdy(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat' + createCatDto.age;
  // }

}