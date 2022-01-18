import { DeleteTodoDto } from './dto/delete-todo-dto';
import { GetTodoDto } from './dto/get-todo-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo-dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async getTodo({ owner }: GetTodoDto) {
    return await this.todoRepository.find({ owner });
  }

  async createTodo({ id, owner, title }: CreateTodoDto) {
    return await this.todoRepository.save({
      title,
      id,
      owner,
      completed: false,
      content: '',
      deadline: '',
    });
  }

  async deleteTodo({ id, owner }: DeleteTodoDto) {
    return await this.todoRepository.delete({ id, owner });
  }
}
