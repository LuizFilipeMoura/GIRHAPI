import { CreatePautaDto } from './dto/create-pauta.dto';
import { UpdatePautaDto } from './dto/update-pauta.dto';
import { PrismaClient } from '@prisma/client';
import { Pauta } from './entities/pauta.entity';
import { EscolhaService } from '../escolha/escolha.service';
export declare class PautaService extends PrismaClient {
    private escolhaService;
    constructor(escolhaService: EscolhaService);
    create(createPautaDto: CreatePautaDto): Promise<Pauta>;
    findAll(): Promise<import(".prisma/client").Pauta[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PautaClient<import(".prisma/client").Pauta>;
    findEscolhas(pautaId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Escolha[]>;
    cadastrarPauta(pauta: Pauta): Promise<Pauta>;
    update(id: string, updatePautaDto: UpdatePautaDto): Promise<import(".prisma/client").Pauta>;
    remove(id: string): Promise<import(".prisma/client").Pauta>;
}
