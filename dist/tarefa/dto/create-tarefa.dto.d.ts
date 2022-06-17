import { CreateCargoDto } from '../../cargo/dto/create-cargo.dto';
import { ConnectCargoDto } from '../../cargo/dto/connect-cargo.dto';
export declare class CreateTarefaCargoRelationInputDto {
    create?: CreateCargoDto;
    connect?: ConnectCargoDto;
}
export declare class CreateTarefaDto {
    id?: string;
    descricao?: string;
    passos: string[];
    grupo?: string;
    recorrencia?: number;
    prioridade?: number;
    Cargo?: CreateTarefaCargoRelationInputDto;
}
