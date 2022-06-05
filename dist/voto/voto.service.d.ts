import { CreateVotoDto } from './dto/create-voto.dto';
import { UpdateVotoDto } from './dto/update-voto.dto';
import { PrismaClient } from '@prisma/client';
import { Participante } from '../participante/entities/participante.entity';
import { Escolha } from '../escolha/entities/escolha.entity';
export declare class VotoService extends PrismaClient {
    create(createVotoDto: CreateVotoDto): import(".prisma/client").Prisma.Prisma__VotoClient<import(".prisma/client").Voto>;
    votar(participante: Participante, escolha: Escolha): import(".prisma/client").Prisma.Prisma__VotoClient<import(".prisma/client").Voto>;
    findAll(): Promise<import(".prisma/client").Voto[]>;
    findOne(id: string): Promise<import(".prisma/client").Voto>;
    update(id: string, updateVotoDto: UpdateVotoDto): Promise<import(".prisma/client").Voto>;
    remove(id: string): Promise<import(".prisma/client").Voto>;
}
