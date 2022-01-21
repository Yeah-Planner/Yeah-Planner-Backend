import { IsUUID } from 'class-validator';

export class GetUserDto {
  @IsUUID()
  uuid: string;
}
