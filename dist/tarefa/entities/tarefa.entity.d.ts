export declare class TarefaBase {
    descricao: string;
    passos: string[];
    grupo: any;
    recorrencia: number;
    prioridade: number;
}
export declare class Tarefa extends TarefaBase {
}
export declare enum TIPOS_RECORRENCIA {
    DIARIO = 0,
    SEMANAL = 1,
    QUINZENAL = 2,
    MENSAL = 3,
    QUANDO_HOUVER = 4,
    A_CADA_ATENDIMENTO = 5
}
export declare const tiposRecorrencia: string[];
