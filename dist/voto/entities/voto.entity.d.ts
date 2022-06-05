export declare class VotoBase {
    id: string;
    quantidadeVotos: number;
}
export declare class Voto extends VotoBase {
    participanteId?: string;
    escolhaId?: string;
}
