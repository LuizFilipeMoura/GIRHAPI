import { PautaService } from './pauta.service';
import { CreatePautaDto } from './dto/create-pauta.dto';
import { UpdatePautaDto } from './dto/update-pauta.dto';
export declare class PautaController {
    private readonly pautaService;
    constructor(pautaService: PautaService);
    create(createPautaDto: CreatePautaDto): Promise<import("./entities/pauta.entity").Pauta>;
    findAll(): Promise<import(".prisma/client").Pauta[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PautaClient<import(".prisma/client").Pauta>;
    update(id: string, updatePautaDto: UpdatePautaDto): Promise<import(".prisma/client").Pauta>;
    remove(id: string): Promise<import(".prisma/client").Pauta>;
}
