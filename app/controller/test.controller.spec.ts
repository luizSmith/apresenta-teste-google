import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';

describe('TestController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TestController],
      providers: [],
    }).compile();
  });

  describe('getTest', () => {
    it('should return "Dados do paciente estão aqui"', () => {
      const appController = app.get(TestController);
      expect(appController.getTest()).toBe('Essa é uma rota teste!');
    });
  });
});