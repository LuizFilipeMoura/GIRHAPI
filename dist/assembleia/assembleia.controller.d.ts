import { AssembleiaService } from './assembleia.service';
import { CreateAssembleiaDto } from './dto/create-assembleia.dto';
import { UpdateAssembleiaDto } from './dto/update-assembleia.dto';
export declare class AssembleiaController {
    private assembleiaService;
    constructor(assembleiaService: AssembleiaService);
    create(createAssembleiaDto: CreateAssembleiaDto): import(".prisma/client").Prisma.Prisma__AssembleiaClient<import(".prisma/client").Assembleia>;
    findAll(): Promise<import(".prisma/client").Assembleia[]>;
    findPautas(id: string): Promise<import(".prisma/client").Pauta[]>;
    findParticipantes(id: string): Promise<import(".prisma/client").Participante[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AssembleiaClient<import(".prisma/client").Assembleia & {
        pautas: import(".prisma/client").Pauta[];
    }>;
    update(id: string, updateAssembleiaDto: UpdateAssembleiaDto): Promise<import(".prisma/client").Assembleia>;
    remove(id: string): Promise<import(".prisma/client").Assembleia>;
}
