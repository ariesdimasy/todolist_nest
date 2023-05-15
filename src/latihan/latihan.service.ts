import { Injectable } from '@nestjs/common';

@Injectable()
export class LatihanService {
  getLatihan() {
    return {
      success: true,
      message: 'list Latihan sucessfullty fetchs',
      data: [
        {
          id: 1,
          latihan: 'latihan senam',
        },
      ],
    };
  }

  getDetailLatihan() {
    return {
      success: true,
      message: 'Latihan Detail successfully fetch',
      data: {
        id: 1,
        latihan: 'latihan senam',
      },
    };
  }
}
