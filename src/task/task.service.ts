import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';

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
      data: [
        {
          task_name: 'sapu kamar',
          task_description: 'sapu kamar sampai bersih',
        },
        {
          task_name: 'bersihkan kandang ayam',
          task_description: 'kandang ayam depan rumah tolong di bersihkan',
        },
      ],
    };
  }
}
