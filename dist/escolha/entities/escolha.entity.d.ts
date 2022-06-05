import { Voto } from '../../voto/entities/voto.entity';
export declare class EscolhaBase {
    id: string;
    opcao: string;
    ordem: number;
}
export declare class Escolha extends EscolhaBase {
    constructor(opcao?: string, ordem?: number, pautaId?: string);
    pautaId: string;
    votos?: Voto[];
}
