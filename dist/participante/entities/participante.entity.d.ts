import { Voto } from '../../voto/entities/voto.entity';
export declare class ParticipanteBase {
    id: string;
    nome?: string;
    email?: string;
    status?: STATUS_PARTICIPANTE;
    quantidadeON?: number;
    quantidadePN?: number;
    quantidadeCotas?: number;
    cpfcnpj?: string;
    tipoParticipante?: TIPO_PARTICIPANTE;
    participacao?: PARTICIPACAO;
    permissaoParticipante?: PERMISSAO;
    podeVotar?: boolean;
}
export declare class Participante extends ParticipanteBase {
    votos?: Voto[];
    bvdId: string;
    assembleiaId: string;
}
export declare enum STATUS_PARTICIPANTE {
    Aprovado = 0,
    Reprovado = 1,
    Pendente = 2
}
export declare enum TIPO_PARTICIPANTE {
    Equipe = 0,
    Acionista = 1,
    Representante = 2,
    Outorgante = 3
}
export declare enum PERMISSAO {
    Administrador = 0,
    Usuario = 1,
    Master = 2
}
export declare enum PARTICIPACAO {
    Online = 0,
    Presencial = 1,
    Sem_Acesso = 2
}
