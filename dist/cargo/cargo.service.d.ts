import { PrismaClient } from '@prisma/client';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoService extends PrismaClient {
    create(createCargoDto: CreateCargoDto): Promise<void>;
    findAll(): Promise<(import(".prisma/client").Cargo & {
        tarefas: import(".prisma/client").Tarefa[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Cargo & {
        tarefas: import(".prisma/client").Tarefa[];
    }>;
    update(id: string, updateCargoDto: UpdateCargoDto): Promise<import(".prisma/client").Cargo>;
    remove(id: string): Promise<import(".prisma/client").Cargo>;
}
