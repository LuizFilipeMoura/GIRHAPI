import { VotoService } from './voto.service';
import { CreateVotoDto } from './dto/create-voto.dto';
import { UpdateVotoDto } from './dto/update-voto.dto';
export declare class VotoController {
    private readonly votoService;
    constructor(votoService: VotoService);
    create(createVotoDto: CreateVotoDto): import(".prisma/client").Prisma.Prisma__VotoClient<import(".prisma/client").Voto>;
    findAll(): Promise<import(".prisma/client").Voto[]>;
    findOne(id: string): Promise<import(".prisma/client").Voto>;
    update(id: string, updateVotoDto: UpdateVotoDto): Promise<import(".prisma/client").Voto>;
    remove(id: string): Promise<import(".prisma/client").Voto>;
}
