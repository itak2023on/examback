import { NestFactory } from '@nestjs/core';

import secureSession from '@fastify/secure-session';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


import { AppModule } from './app.module';

import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule );
    // await app.register(secureSession, {
    //   secret: 'averylogphrasebiggerthanthirtytwochars',
    //   salt: 'mq9hDxBVDbspDR6n',
    // });

  app.enableCors();
  app.use(
    session({
      name:'bat',
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie:{
        maxAge:60000,

      }
    }),
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
