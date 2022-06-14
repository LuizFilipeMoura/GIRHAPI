import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { CreateTarefaDto } from '../tarefa/dto/create-tarefa.dto';
import { Tarefa } from '../tarefa/entities/tarefa.entity';

@Injectable()
export class CargoService extends PrismaClient {
  create(createCargoDto: CreateCargoDto, tarefas: Tarefa[]) {
    tarefas = tarefas?.map((tarefa) => {
      delete tarefa.cargoId;
      delete tarefa.id;
      return tarefa;
    });
    return this.cargo.create({
      data: { ...createCargoDto, tarefas: { create: tarefas } },
    });
  }

  async findAll() {
    return await this.cargo.findMany({ include: { tarefas: true } });
  }

  async findOne(id: string) {
    return await this.cargo.findUnique({
      where: { id },
      include: { tarefas: true },
    });
  }

  async update(id: string, updateCargoDto: UpdateCargoDto, tarefas: Tarefa[]) {
    tarefas = tarefas?.map((tarefa) => {
      delete tarefa.cargoId;
      delete tarefa.id;
      return tarefa;
    });
    return await this.cargo.update({
      where: { id },
      data: { ...updateCargoDto, tarefas: { create: tarefas } },
    });
  }

  async remove(id: string) {
    return await this.cargo.delete({ where: { id } });
  }
}
