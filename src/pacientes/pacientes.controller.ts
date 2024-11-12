import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacienteDto } from './paciente.dto';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  getAllPacientes() {
    return this.pacientesService.findAll();
  }

  @Post()
  addPaciente(@Body() pacienteDto: PacienteDto) {
    return this.pacientesService.create(pacienteDto);
  }

  // Convertimos id a número antes de pasarlo al servicio
  @Delete(':id')
  deletePaciente(@Param('id') id: string) {
    const idNumber = parseInt(id, 10);  // Convierte el id de string a number
    if (isNaN(idNumber)) {
      return { mensaje: 'ID inválido' };  // Si el id no es un número válido
    }
    return this.pacientesService.delete(idNumber);  // Pasamos el id convertido al servicio
  }
  
}


