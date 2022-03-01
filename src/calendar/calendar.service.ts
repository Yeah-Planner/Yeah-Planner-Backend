import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendar } from 'src/entities/calendar.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar) private readonly calRepo: Repository<Calendar>,
  ) {}

  async getCalendar(owner: string) {
    return await this.calRepo.find({ owner });
  }
}
