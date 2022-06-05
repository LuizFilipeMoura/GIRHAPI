import { EscolhaService } from './escolha.service';
import { CreateEscolhaDto } from './dto/create-escolha.dto';
import { UpdateEscolhaDto } from './dto/update-escolha.dto';
export declare class EscolhaController {
    private readonly escolhaService;
    constructor(escolhaService: EscolhaService);
    create(createEscolhaDto: CreateEscolhaDto): import(".prisma/client").Prisma.Prisma__EscolhaClient<import(".prisma/client").Escolha>;
    findAll(): Promise<import(".prisma/client").Escolha[]>;
    findOne(id: string): Promise<import(".prisma/client").Escolha>;
    update(id: string, updateEscolhaDto: UpdateEscolhaDto): Promise<import(".prisma/client").Escolha>;
    remove(id: string): Promise<import(".prisma/client").Escolha>;
}
