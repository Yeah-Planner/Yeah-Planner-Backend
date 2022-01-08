import { Body, Controller, Post } from '@nestjs/common';
import { Todo } from 'src/entities/todo.entity';
import { GetTodoDto } from './dto/get-todo-dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/get')
  async getTodo(@Body() getTodoDto: GetTodoDto): Promise<Todo[]> {
    return [
      ...(await this.todoService.getTodo(getTodoDto)),
      {
        id: '1',
        completed: false,
        content: 'Test',
        deadline: 'Someday',
        owner: 'invalid-user',
        title: 'Temp',
        updatedAt: new Date(),
        createdAt: new Date(),
        beforeInsert: null,
      },
    ];
  }
}
