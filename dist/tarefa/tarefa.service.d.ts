import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaClient } from '@prisma/client';
export declare class TarefaService extends PrismaClient {
    create(createTarefaDto: CreateTarefaDto): import(".prisma/client").Prisma.Prisma__TarefaClient<import(".prisma/client").Tarefa>;
    findAll(): Promise<import(".prisma/client").Tarefa[]>;
    findOne(id: string): Promise<import(".prisma/client").Tarefa>;
    update(id: string, updateTarefaDto: UpdateTarefaDto): Promise<import(".prisma/client").Tarefa>;
    remove(id: string): Promise<import(".prisma/client").Tarefa>;
}
