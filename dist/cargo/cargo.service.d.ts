import { PrismaClient } from '@prisma/client';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoService extends PrismaClient {
    create(createCargoDto: CreateCargoDto): import(".prisma/client").Prisma.Prisma__CargoClient<import(".prisma/client").Cargo>;
    findAll(): Promise<import(".prisma/client").Cargo[]>;
    findOne(id: string): Promise<import(".prisma/client").Cargo>;
    update(id: string, updateCargoDto: UpdateCargoDto): Promise<import(".prisma/client").Cargo>;
    remove(id: string): Promise<import(".prisma/client").Cargo>;
}
