import { Controller, Injectable, NestMiddleware,UseGuards, Get, Post,HttpCode, Header, Redirect, Query, Param, Body, Res, HttpStatus   } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CatsService } from './cats.service';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';

import { CreateCatDto} from './create-cat.dto';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {

    

    constructor(private readonly catsService: CatsService) {}

    @Get('ca')
    getHello() {
    return this.catsService.findAll();
    //  return "haha"
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

  @Post('bdy')
  async bdy(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat' + createCatDto.age;
  }

}