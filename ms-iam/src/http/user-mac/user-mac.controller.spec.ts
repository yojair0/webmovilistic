import { Test, TestingModule } from '@nestjs/testing';
import { UserMacController } from './user-mac.controller';
import { UserMacService } from './user-mac.service';

describe('UserMacController', () => {
  let controller: UserMacController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMacController],
      providers: [UserMacService],
    }).compile();

    controller = module.get<UserMacController>(UserMacController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
