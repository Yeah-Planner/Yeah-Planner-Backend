import { IsHash, IsUUID, IsObject } from 'class-validator';

export class updateTodoDto {
  @IsUUID()
  owner: string;

  @IsHash('sha256')
  id: string;

  @IsObject()
  data: {
    update: 'title' | 'content' | 'deadline' | 'completed';
    value: string | boolean;
  };
}
