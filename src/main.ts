import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (origin, callback) => {
      const o = origin.split('://')[1].split(':')[0];
      const origins = ['localhost', 'damascus.kro.kr'];
      if (origins.includes(o)) return callback(null, true);
      callback(new Error('Not allowed by CORS'));
    },
  });
  await app.listen(5676);
}
bootstrap();
