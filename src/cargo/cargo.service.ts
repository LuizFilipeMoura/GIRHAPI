import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Injectable()
export class CargoService {
  create(createCargoDto: CreateCargoDto) {
    return 'This action adds a new cargo';
  }

  findAll() {
    return `This action returns all cargo`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cargo`;
  }

  update(id: string, updateCargoDto: UpdateCargoDto) {
    return `This action updates a #${id} cargo`;
  }

  remove(id: string) {
    return `This action removes a #${id} cargo`;
  }
}
