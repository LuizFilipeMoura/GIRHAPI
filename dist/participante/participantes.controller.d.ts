import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipantesController {
    private readonly participantesService;
    constructor(participantesService: ParticipantesService);
    create(createParticipanteDto: CreateParticipanteDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateParticipanteDto: UpdateParticipanteDto): Promise<any>;
    remove(id: string): Promise<any>;
}
