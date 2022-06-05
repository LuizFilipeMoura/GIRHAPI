import { CreateBvdDto } from './dto/create-bvd.dto';
import { UpdateBvdDto } from './dto/update-bvd.dto';
import { PrismaClient } from '@prisma/client';
import { Assembleia } from '../assembleia/entities/assembleia.entity';
import { Participante } from '../participante/entities/participante.entity';
import { Voto } from '../voto/entities/voto.entity';
export declare class BvdService extends PrismaClient {
    create(createBvdDto: CreateBvdDto): import(".prisma/client").Prisma.Prisma__BvdClient<import(".prisma/client").Bvd>;
    findAll(): Promise<import(".prisma/client").Bvd[]>;
    uploadBVD(assembleia: Assembleia, participante: Participante, votos: Voto[]): void;
    findOne(id: string): Promise<import(".prisma/client").Bvd>;
    update(id: string, updateBvdDto: UpdateBvdDto): Promise<import(".prisma/client").Bvd>;
    remove(id: string): Promise<import(".prisma/client").Bvd>;
    parse(planilha: any[], assId: string): Promise<void>;
}
