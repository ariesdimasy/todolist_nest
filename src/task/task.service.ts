import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { tasks } from './data/task';

@Injectable()
export class TaskService {
  async createTask(data: CreateTaskDTO) {
    return {
      success: true,
      message: 'task successfully created',
      data: data,
    };
  }

  async getAllTask() {
    return {
      success: true,
      message: 'tasks successfully fetch',
      data: tasks,
    };
  }

  async getTaskById(id: number) {
    return {
      success: true,
      message: 'task detail successfully fetch',
      data: tasks.find((task) => task.task_id == id)
    };
  }
}
