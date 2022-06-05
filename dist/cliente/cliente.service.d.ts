import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaClient } from '@prisma/client';
export declare class ClienteService extends PrismaClient {
    create(createClienteDto: CreateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente>;
    findAll(): Promise<import(".prisma/client").Cliente[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<import(".prisma/client").Cliente>;
    remove(id: string): Promise<import(".prisma/client").Cliente>;
}
