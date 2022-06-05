import { Assembleia } from '../../assembleia/entities/assembleia.entity';
export declare class ClienteBase {
    id: string;
    nome: string;
    cnpj: string;
}
export declare class Cliente extends ClienteBase {
    constructor(nome?: string, cnpj?: string);
    assembleias?: Assembleia[];
}
