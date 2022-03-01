import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { CalendarModule } from './calendar/calendar.module';
import { Calendar } from './entities/calendar.entity';
import { Todo } from './entities/todo.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'yeahp',
      // deepcode ignore NoHardcodedPasswords: it's restricted db account which is intended
      password: 'yeahx4',
      database: 'yeah_planner',
      entities: [User, Todo, Calendar],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TodoModule,
    CalendarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
