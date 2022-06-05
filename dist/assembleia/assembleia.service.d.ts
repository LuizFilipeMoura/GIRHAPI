import { CreateAssembleiaDto } from './dto/create-assembleia.dto';
import { UpdateAssembleiaDto } from './dto/update-assembleia.dto';
import { PrismaClient } from '@prisma/client';
export declare class AssembleiaService extends PrismaClient {
    create(createAssembleiaDto: CreateAssembleiaDto): import(".prisma/client").Prisma.Prisma__AssembleiaClient<import(".prisma/client").Assembleia>;
    findAll(): Promise<import(".prisma/client").Assembleia[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AssembleiaClient<import(".prisma/client").Assembleia & {
        pautas: import(".prisma/client").Pauta[];
    }>;
    findPautas(assembleiaId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Pauta[]>;
    findParticipantes(assembleiaId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Participante[]>;
    update(id: string, updateAssembleiaDto: UpdateAssembleiaDto): Promise<import(".prisma/client").Assembleia>;
    remove(id: string): Promise<import(".prisma/client").Assembleia>;
}
