import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesModule } from './pacientes/pacientes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos (puede ser 'postgres', 'mysql', 'sqlite', etc.)
      host: 'localhost', // Dirección del servidor de base de datos
      port: 3306, // Puerto (para MySQL es por defecto 3306)
      username: 'root', // Nombre de usuario de la base de datos
      password: 'your-password', // Contraseña de la base de datos
      database: 'dengue_db', // Nombre de la base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ubicación de las entidades
      synchronize: true, // Sólo en desarrollo: automáticamente crea las tablas si no existen
    }),
    PacientesModule, // Importa tu módulo de pacientes
  ],
})
export class AppModule {}