
import {Cargo} from '../../cargo/entities/cargo.entity'


export class Tarefa {
  id: string ;
descricao: string  | null;
passos: string[] ;
grupo: string  | null;
recorrencia: number  | null;
prioridade: number  | null;
Cargo?: Cargo  | null;
cargoId: string  | null;
}
