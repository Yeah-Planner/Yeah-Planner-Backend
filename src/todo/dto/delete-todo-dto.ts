import { IsHash, IsUUID } from 'class-validator';

export class DeleteTodoDto {
  @IsUUID()
  owner: string;

  @IsHash('sha256')
  id: string;
}
