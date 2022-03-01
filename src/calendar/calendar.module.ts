import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calendar } from 'src/entities/calendar.entity';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Calendar])],
  controllers: [CalendarController],
  providers: [CalendarService],
})
export class CalendarModule {}
