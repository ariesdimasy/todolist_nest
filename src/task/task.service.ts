import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { tasks } from './data/task';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor (private prisma: PrismaService) { }

  async createTask(data: CreateTaskDTO) {
    try {
      const result = await this.prisma.tasks.create({
        data: data,
      });

      console.log('result => ', result);

      if (result) {
        return {
          success: true,
          message: 'task successfully created',
          data: result,
        };
      } else {
        return {
          success: false,
          message: 'task failed',
          data: {},
        };
      }
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.message),
        data: {},
      };
    }
  }

  async getAllTask() {

    try {
      const result = await this.prisma.tasks.findMany();

      if (result) {
        return {
          success: true,
          message: 'task successfully fetchs',
          data: result,
        };
      } else {
        return {
          success: false,
          message: 'task failed',
          data: {},
        };
      }
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.message),
        data: {},
      };
    }
  }

  async getTaskById(id: number) {
    try {
      const result = await this.prisma.tasks.findFirst({
        where: {
          id: id,
        },
      });

      if (result) {
        return {
          success: true,
          message: 'task successfully fetch',
          data: result,
        };
      } else {
        return {
          success: false,
          message: 'task failed',
          data: {},
        };
      }
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.message),
        data: {},
      };
    }
  }

  async updateTaskId(task_id: number, data: UpdateTaskDto) {
    try {
      const result = await this.prisma.tasks.update({
        data: data,
        where: {
          id: task_id,
        },
      });

      if (result) {
        return {
          success: true,
          message: 'Update task sucessfully',
          data: result,
        };
      } else {
        return {
          success: false,
          message: 'task update failed',
          data: {},
        };
      }
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.message),
        data: {},
      };
    }
  }

  async deleteTaskId(task_id: number) {
    try {
      const result = await this.prisma.tasks.delete({
        where: {
          id: task_id,
        },
      });

      if (result) {
        return {
          success: true,
          message: 'delete task sucessfully',
          data: result,
        };
      } else {
        return {
          success: false,
          message: 'task delete failed',
          data: {},
        };
      }
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.message),
        data: {},
      };
    }
  }
}
