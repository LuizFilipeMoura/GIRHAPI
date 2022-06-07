import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
    create(createTarefaDto: CreateTarefaDto): import(".prisma/client").Prisma.Prisma__TarefaClient<import(".prisma/client").Tarefa>;
    findAll(): Promise<import(".prisma/client").Tarefa[]>;
    findOne(id: string): Promise<import(".prisma/client").Tarefa>;
    update(id: string, updateTarefaDto: UpdateTarefaDto): Promise<import(".prisma/client").Tarefa>;
    remove(id: string): Promise<import(".prisma/client").Tarefa>;
}
