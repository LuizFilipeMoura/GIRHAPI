import { CreateColaboradorDto } from '../../colaborador/dto/create-colaborador.dto';
import { ConnectColaboradorDto } from '../../colaborador/dto/connect-colaborador.dto';
export declare class CreateLojaColaboradoresRelationInputDto {
    create?: CreateColaboradorDto[];
    connect?: ConnectColaboradorDto[];
}
export declare class CreateLojaDto {
    id?: string;
    nome?: string;
    endereco?: string;
    colaboradores?: CreateLojaColaboradoresRelationInputDto;
}
