import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose', 'log'],
  });
  app.enableCors({
    origin: (origin, callback) => {
      try {
        if (!origin) {
          throw new Error('Origin is not defined');
        }
        const ori = origin?.split('://');

        if (ori.length < 2) {
          throw new Error('Origin is not valid');
        }

        const o = ori[1].split(':')[0];
        const origins = ['localhost', 'damascus.kro.kr', 'yeahplanner.kro.kr'];
        if (origins.includes(o)) return callback(null, true);
        else throw new Error('Not alloed by CORS');
      } catch (e) {
        callback(e, false);
      }
    },
  });
  await app.listen(5676);
}
bootstrap();
