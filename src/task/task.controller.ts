import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor (private taskService: TaskService) { }

  @Post()
  async createTask(@Body() body: CreateTaskDTO) {
    return await this.taskService.createTask(body);
  }

  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @Get('/:id')
  async getTaskById(id) {
    return await this.taskService.getTaskById(id);
  }
}
