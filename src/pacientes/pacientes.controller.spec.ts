import { Test, TestingModule } from '@nestjs/testing';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service'; // Asegúrate de que esté importado
import { PacienteDto } from './paciente.dto'; // Asegúrate de que esté importado

describe('PacientesController', () => {
  let controller: PacientesController;
  let service: PacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacientesController],
      providers: [PacientesService], // Asegúrate de incluir el servicio
    }).compile();

    controller = module.get<PacientesController>(PacientesController);
    service = module.get<PacientesService>(PacientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all patients', async () => {
    const result = [
      { id: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678', direccion: 'Calle Falsa 123', tipo: 'General' },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await controller.getAllPacientes()).toBe(result);
  });

  it('should add a patient', async () => {
    const patientDto: PacienteDto = {
      nombre: 'Juan',
      apellido: 'Perez',
      dni: '12345678',
      direccion: 'Calle Falsa 123',
      tipo: 'General',
    };
    const result = { id: 1, ...patientDto };

    jest.spyOn(service, 'create').mockResolvedValue(result);

    expect(await controller.addPaciente(patientDto)).toBe(result);
  });

  it('should delete a patient', async () => {
    const id = '1';  // Cambia a string (no número)
    const result = { id: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678', direccion: 'Calle Falsa 123', tipo: 'General' };
  
    jest.spyOn(service, 'delete').mockResolvedValue(result);  // Mockeamos la respuesta de delete
  
    expect(await controller.deletePaciente(id)).toBe(result);  // Pasamos el id como string
  });
});
