import { IsUUID } from 'class-validator';

export class getCalendarDto {
  @IsUUID()
  owner: string;
}
