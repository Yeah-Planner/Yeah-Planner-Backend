import { GetTodoDto } from './dto/get-todo-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async getTodo({ owner }: GetTodoDto) {
    return await this.todoRepository.find({ owner });
  }
}
