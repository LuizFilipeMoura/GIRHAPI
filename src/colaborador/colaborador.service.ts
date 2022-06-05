import { Injectable } from '@nestjs/common';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ColaboradorService extends PrismaClient {
  create(createColaboradorDto: CreateColaboradorDto) {
    return this.colaborador.create({ data: createColaboradorDto });
  }

  async findAll() {
    return await this.colaborador.findMany();
  }

  async findOne(id: string) {
    return await this.colaborador.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateColaboradorDto: UpdateColaboradorDto) {
    return await this.colaborador.update({
      where: { id },
      data: updateColaboradorDto,
    });
  }

  async remove(id: string) {
    return await this.colaborador.delete({ where: { id } });
  }
}
