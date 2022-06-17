import { CreateColaboradorDto } from '../../colaborador/dto/create-colaborador.dto';
import { ConnectColaboradorDto } from '../../colaborador/dto/connect-colaborador.dto';
export declare class UpdateLojaColaboradoresRelationInputDto {
    create?: CreateColaboradorDto[];
    connect?: ConnectColaboradorDto[];
}
export declare class UpdateLojaDto {
    id?: string;
    nome?: string;
    endereco?: string;
    colaboradores?: UpdateLojaColaboradoresRelationInputDto;
}
