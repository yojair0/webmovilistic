import { Test, TestingModule } from '@nestjs/testing';
import { UserMacService } from './user-mac.service';

describe('UserMacService', () => {
  let service: UserMacService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMacService],
    }).compile();

    service = module.get<UserMacService>(UserMacService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
