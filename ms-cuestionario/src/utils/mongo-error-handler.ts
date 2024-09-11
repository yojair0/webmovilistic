import { ConflictException } from '@nestjs/common';
import { MongoError } from 'mongodb';

export const mongoErrorHandler = (exception: MongoError) => {
  switch (exception.code) {
    case 11000:
      console.log(exception);
      throw new ConflictException(`Duplicate unique key`);
    default:
      throw new ConflictException(`Unknown error`);
  }
};
