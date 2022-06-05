import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Injectable()
export class CargoService extends PrismaClient {
  create(createCargoDto: CreateCargoDto) {
    return this.cargo.create({ data: createCargoDto });
  }

  async findAll() {
    return await this.cargo.findMany();
  }

  async findOne(id: string) {
    return await this.cargo.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateCargoDto: UpdateCargoDto) {
    return await this.cargo.update({
      where: { id },
      data: updateCargoDto,
    });
  }

  async remove(id: string) {
    return await this.cargo.delete({ where: { id } });
  }
}
