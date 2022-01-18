import { IsHash, IsString, IsUUID } from 'class-validator';

export class CreateTodoDto {
  @IsHash('sha256')
  id: string;

  @IsUUID()
  owner: string;

  @IsString()
  title: string;
}
