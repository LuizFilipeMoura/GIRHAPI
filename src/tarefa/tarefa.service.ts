import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TarefaService extends PrismaClient {
  create(createTarefaDto: CreateTarefaDto) {
    return this.tarefa.create({ data: createTarefaDto });
  }

  async findAll() {
    return await this.tarefa.findMany();
  }

  async findOne(id: string) {
    return await this.tarefa.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateTarefaDto: UpdateTarefaDto) {
    delete updateTarefaDto.id;
    return await this.tarefa.update({
      where: { id },
      data: updateTarefaDto,
    });
  }

  async remove(id: string) {
    return await this.tarefa.delete({ where: { id } });
  }
}
