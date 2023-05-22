import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
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
  async getTaskById(@Param('id') id) {
    return await this.taskService.getTaskById(Number(id));
  }

  @Patch('/:task_id')
  async updateTaskById(@Param('task_id') task_id, @Body() body) {
    return await this.taskService.updateTaskId(Number(task_id), body);
  }

  @Delete('/:task_id')
  async deleteTaskById(@Param('task_id') task_id) {
    return await this.taskService.deleteTaskId(Number(task_id));
  }

  @Get('/:id/:name')
  async getTaskByIdTest(@Param() params) {
    console.log(' params ==> ', params);
    return await this.taskService.getTaskById(params.id);
  }
}
