import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
export declare class TarefaService {
    create(createTarefaDto: CreateTarefaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: string): string;
}
