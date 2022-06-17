import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';
import { UpdateTarefaDto } from '../tarefa/dto/update-tarefa.dto';

@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Post()
  create(@Body() cargo: Cargo) {
    return this.cargoService.create(cargo as CreateCargoDto);
  }

  @Get()
  findAll() {
    return this.cargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cargoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargoDto: Cargo) {
    return this.cargoService.update(id, updateCargoDto as UpdateCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cargoService.remove(id);
  }
}
