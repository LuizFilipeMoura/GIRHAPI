import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipanteController {
    private readonly participantesService;
    constructor(participantesService: ParticipanteService);
    create(createParticipanteDto: CreateParticipanteDto): import(".prisma/client").Prisma.Prisma__ParticipanteClient<import(".prisma/client").Participante>;
    findAll(): Promise<import(".prisma/client").Participante[]>;
    findOne(id: string): Promise<import(".prisma/client").Participante>;
    update(id: string, updateParticipanteDto: UpdateParticipanteDto): Promise<import(".prisma/client").Participante>;
    remove(id: string): Promise<import(".prisma/client").Participante>;
}
