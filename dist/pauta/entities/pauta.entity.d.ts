import { Escolha } from '../../escolha/entities/escolha.entity';
export declare class PautaBase {
    id: string;
    ordem: number;
    descricao: string;
    status: number;
    tipo: string;
    tipoVoto?: number;
    tipoVotante: string;
    abstencao: string;
    naoVotou: string;
}
export declare class Pauta extends PautaBase {
    escolhas?: Escolha[];
    assembleiaId: string;
}
export declare enum STATUS_PAUTA {
    NAO_INICIADA = 0,
    HOMOLOGADA = 1,
    EM_VOTACAO = 2,
    TABULANDO = 3
}
export declare enum TIPO_PAUTA {
    APROVAR_REJEITAR_ABSTER = 0,
    VOTO_MULTIPLO = 1,
    CONSELHO_ADM = 2,
    CONSELHO_FISCAL = 3
}
