import { Test, TestingModule } from '@nestjs/testing';
import { PatientController } from './patient.controller';

describe('PatientController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PatientController],
      providers: [],
    }).compile();
  });

  describe('getPacientes', () => {
    it('should return "Dados do paciente estão aqui"', () => {
      const appController = app.get(PatientController);
      expect(appController.findOne()).toBe('Essa é uma rota teste!');
    });
  });
});