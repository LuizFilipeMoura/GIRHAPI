import { Colaborador } from '../../colaborador/entities/colaborador.entity';

export class LojaBase {
  nome: string;
  endereco: string;
}

export class Loja extends LojaBase {
  // endereco: Endereco | string;
  colaboradores: Colaborador[] = [];
}

export type Endereco = {
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
};
