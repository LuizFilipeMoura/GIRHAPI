import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { PrismaService } from '../services/prisma/prisma.service';
export declare class LojaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createLojaDto: CreateLojaDto): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Loja[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
    update(id: string, updateLojaDto: UpdateLojaDto): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__LojaClient<import(".prisma/client").Loja>;
}
