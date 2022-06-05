import { Colaborador } from '../../colaborador/entities/colaborador.entity';
export declare class LojaBase {
    nome: string;
    endereco: string;
}
export declare class Loja extends LojaBase {
    colaboradores: Colaborador[];
}
export declare type Endereco = {
    endereco: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
};
