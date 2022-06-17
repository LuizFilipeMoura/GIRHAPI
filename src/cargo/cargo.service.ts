import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { CreateTarefaDto } from '../tarefa/dto/create-tarefa.dto';
import { Tarefa } from '../tarefa/entities/tarefa.entity';
import { UpdateTarefaDto } from '../tarefa/dto/update-tarefa.dto';

@Injectable()
export class CargoService extends PrismaClient {
  async create(createCargoDto: CreateCargoDto) {
    const tarefas = createCargoDto.tarefas as UpdateTarefaDto[];

    delete createCargoDto.tarefas;
    const cargo = await this.cargo.create({
      data: { ...createCargoDto },
    });

    if (tarefas) {
      tarefas.map(async (tarefa) => {
        tarefa['cargoId'] = cargo.id;
        const id = tarefa.id;
        delete tarefa.id;
        await this.tarefa.update({
          where: { id },
          data: { ...tarefa },
        });
      });
    }
    //
    // let resposta = await this.tarefa.updateMany({ data: tarefas });
    // console.log(resposta);
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

  async update(id: string, updateCargoDto: UpdateCargoDto) {
    const cargoId = updateCargoDto.id;
    delete updateCargoDto.id;
    const tarefas = updateCargoDto.tarefas as UpdateTarefaDto[];
    delete updateCargoDto.tarefas;
    if (tarefas) {
      tarefas.map(async (tarefa) => {
        tarefa['cargoId'] = cargoId;
        const id = tarefa.id;
        delete tarefa.id;
        await this.tarefa.update({
          where: { id },
          data: { ...tarefa },
        });
      });
    }

    return await this.cargo.update({
      where: { id },
      data: { ...updateCargoDto },
    });
  }

  async remove(id: string) {
    return await this.cargo.delete({ where: { id } });
  }
}
