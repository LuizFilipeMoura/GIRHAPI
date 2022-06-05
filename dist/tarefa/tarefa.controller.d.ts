import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
    create(createTarefaDto: CreateTarefaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: string): string;
}
