
import {Colaborador} from '../../colaborador/entities/colaborador.entity'


export class Loja {
  id: string ;
nome: string  | null;
endereco: string  | null;
colaboradores?: Colaborador[] ;
}
