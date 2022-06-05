export declare class Participante {
    id: string;
    nome: string;
    email: string;
    status: STATUS_PARTICIPANTE;
    assembleiaId: string;
    quantidadeON: number;
    quantidadePN: number;
    quantidadeCotas: number;
    tipoParticipante: TIPO_PARTICIPANTE;
    participacao: PARTICIPACAO;
    permissaoParticipante: PERMISSAO;
    podeVotar: boolean;
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
