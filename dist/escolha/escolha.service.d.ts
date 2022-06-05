import { CreateEscolhaDto } from './dto/create-escolha.dto';
import { UpdateEscolhaDto } from './dto/update-escolha.dto';
import { PrismaClient } from '@prisma/client';
export declare class EscolhaService extends PrismaClient {
    create(createEscolhaDto: CreateEscolhaDto): import(".prisma/client").Prisma.Prisma__EscolhaClient<import(".prisma/client").Escolha>;
    findAll(): Promise<import(".prisma/client").Escolha[]>;
    findOne(id: string): Promise<import(".prisma/client").Escolha>;
    update(id: string, updateEscolhaDto: UpdateEscolhaDto): Promise<import(".prisma/client").Escolha>;
    remove(id: string): Promise<import(".prisma/client").Escolha>;
}
