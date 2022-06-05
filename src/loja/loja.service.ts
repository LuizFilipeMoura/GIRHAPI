import { Injectable } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { PrismaService } from '../services/prisma/prisma.service';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  create(createLojaDto: CreateLojaDto) {
    return this.prisma.loja.create({ data: createLojaDto });
  }

  findAll() {
    return this.prisma.loja.findMany();
  }

  findOne(id: string) {
    return this.prisma.loja.findUnique({ where: { id } });
  }

  update(id: string, updateLojaDto: UpdateLojaDto) {
    return this.prisma.loja.update({ where: { id }, data: updateLojaDto });
  }

  remove(id: string) {
    return this.prisma.loja.delete({ where: { id } });
  }
}
