import { ColaboradorService } from './colaborador.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
export declare class ColaboradorController {
    private readonly colaboradorService;
    constructor(colaboradorService: ColaboradorService);
    create(createColaboradorDto: CreateColaboradorDto): import(".prisma/client").Prisma.Prisma__ColaboradorClient<import(".prisma/client").Colaborador>;
    findAll(): Promise<import(".prisma/client").Colaborador[]>;
    findOne(id: string): Promise<import(".prisma/client").Colaborador>;
    update(id: string, updateColaboradorDto: UpdateColaboradorDto): Promise<import(".prisma/client").Colaborador>;
    remove(id: string): Promise<import(".prisma/client").Colaborador>;
}
