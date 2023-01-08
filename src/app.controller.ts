import { Controller, Get, Post,HttpCode, Header, Render,  Redirect, Query, Param, Body  } from '@nestjs/common';
// import {Observable} from '@reactivex/rxjs/es6/Observable.js'

import { AppService } from './app.service';
// import { CreateCatDto } from './create-cat.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
  return this.appService.getHello();
  }

  @Get('hbs')
  @Render('index')
  root() {
    return { message: 'gasdgufihuij;lasdkf ' };
  }

}
