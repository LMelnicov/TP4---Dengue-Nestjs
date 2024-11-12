import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';
import { Paciente } from './paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])], // Asegúrate de importar la entidad
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
