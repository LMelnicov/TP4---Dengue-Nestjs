import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';
import { PacienteDto } from './paciente.dto';

@Injectable()
export class PacientesService {
    constructor(
        @InjectRepository(Paciente)
        private pacientesRepository: Repository<Paciente>, // Inyecta el repositorio de Paciente
    ) { }

    // Obtener todos los pacientes
    async findAll(): Promise<Paciente[]> {
        return this.pacientesRepository.find();
    }

    // Crear un paciente
    async create(pacienteDto: PacienteDto): Promise<Paciente> {
        const paciente = this.pacientesRepository.create(pacienteDto);
        return this.pacientesRepository.save(paciente);
    }

    // Eliminar un paciente por ID
    async delete(id: number): Promise<Paciente | { mensaje: string }> {
        const paciente = await this.pacientesRepository.findOne({ where: { id } });
        if (!paciente) {
            return { mensaje: "Paciente no encontrado" };
        }
        await this.pacientesRepository.remove(paciente);
        return paciente;  // Devolvemos el paciente eliminado
    }
}



