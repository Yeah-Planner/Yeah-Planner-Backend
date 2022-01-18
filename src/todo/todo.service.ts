import { updateTodoDto } from './dto/update-todo-dto';
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

  async updateTodo({ id, owner, data: { update, value } }: updateTodoDto) {
    const todo = await this.todoRepository.findOne({ id, owner });

    if (!todo) {
      throw new Error('Todo not found');
    }

    switch (update) {
      case 'title':
        todo.title = value as string;
        break;
      case 'content':
        todo.content = value as string;
        break;
      case 'deadline':
        todo.deadline = value as string;
        break;
      case 'completed':
        todo.completed = value as boolean;
        break;
      default:
        throw new Error('Invalid update');
    }
    return await this.todoRepository.save(todo);
  }
}
