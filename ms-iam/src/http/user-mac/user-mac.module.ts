import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMacService } from './user-mac.service';
import { UserMacController } from './user-mac.controller';
import { UserMac, UserMacSchema } from 'src/schemas/user-mac.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserMac.name, schema: UserMacSchema }])
  ],
  controllers: [UserMacController],
  providers: [UserMacService],
  exports: [UserMacService],
})
export class UserMacModule {}