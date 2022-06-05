import { Participante } from '../../participante/entities/participante.entity';
import { Bvd } from '../../bvd/entities/bvd.entity';
import { Pauta } from '../../pauta/entities/pauta.entity';
export declare class AssembleiaBase {
    id: string;
    nome: string;
    finalidade: FINALIDADE;
    videoconferencia: boolean;
    ehAGOE: boolean;
    tipoPresenca: PRESENCA;
    status: STATUS_ASSEMBLEIA;
    dataInicio: string;
    dataFim: string;
    dataInicioInscricoes: string;
    dataFimInscricoes: string;
}
export declare class Assembleia extends AssembleiaBase {
    participantes?: Participante[];
    pautas?: Pauta[];
    bvds?: Bvd[];
    clienteId?: string;
}
export declare enum FINALIDADE {
    Teste = 0,
    Simulacao = 1,
    Oficial = 2
}
export declare enum PRESENCA {
    Presencial = 0,
    Online = 1,
    Hibrido = 2
}
export declare enum STATUS_ASSEMBLEIA {
    Ativa = 0,
    Finalizada = 1,
    Em_Andamento = 2
}
