import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';

@Injectable()
export class TurnoService extends PrismaClient {
  create(createTurnoDto: CreateTurnoDto) {
    return this.turno.create({ data: createTurnoDto });
  }

  async findAll() {
    return await this.turno.findMany();
  }

  async findOne(id: string) {
    return await this.turno.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateTurnoDto: UpdateTurnoDto) {
    return await this.turno.update({
      where: { id },
      data: updateTurnoDto,
    });
  }

  async remove(id: string) {
    return await this.turno.delete({ where: { id } });
  }
}
