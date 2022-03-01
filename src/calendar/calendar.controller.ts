import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { getCalendarDto } from './dto/get-calendar-dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async getCalendar(@Query() { owner }: getCalendarDto) {
    return await this.calendarService.getCalendar(owner);
  }
}
