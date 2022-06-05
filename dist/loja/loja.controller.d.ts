import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojaController {
    private readonly lojaService;
    constructor(lojaService: LojaService);
    create(createLojaDto: CreateLojaDto): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Loja[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
    update(id: string, updateLojaDto: UpdateLojaDto): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
}
