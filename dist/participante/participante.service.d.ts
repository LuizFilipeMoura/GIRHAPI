import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaClient } from '@prisma/client';
export declare class ParticipanteService extends PrismaClient {
    create(createParticipanteDto: CreateParticipanteDto): import(".prisma/client").Prisma.Prisma__ParticipanteClient<import(".prisma/client").Participante>;
    findAll(): Promise<import(".prisma/client").Participante[]>;
    findOne(id: string): Promise<import(".prisma/client").Participante>;
    update(id: string, updateParticipanteDto: UpdateParticipanteDto): Promise<import(".prisma/client").Participante>;
    remove(id: string): Promise<import(".prisma/client").Participante>;
}
