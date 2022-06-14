
import {Cargo} from '../../cargo/entities/cargo.entity'
import {Loja} from '../../loja/entities/loja.entity'


export class Colaborador {
  id: string ;
cpf: string  | null;
nome: string  | null;
matricula: number  | null;
sexo: string  | null;
pai: string  | null;
mae: string  | null;
nacionalidadePai: string  | null;
nacionalidadeMae: string  | null;
dataNascimento: string  | null;
idade: number  | null;
nacionalidade: string  | null;
localNascimento: string  | null;
estado: string  | null;
estadoCivil: string  | null;
deficienteFisico: boolean  | null;
tipoDeficiencia: string  | null;
racaCor: string  | null;
telefone: string  | null;
celular: string  | null;
telefoneRec: string  | null;
email: string  | null;
admissao: string  | null;
selario: number  | null;
setor: string  | null;
horarioTrabalho: string  | null;
venc1Experiencia: string  | null;
venc2Experiencia: string  | null;
endereco: string  | null;
cargo?: Cargo  | null;
Loja?: Loja  | null;
lojaId: string  | null;
cargoId: string  | null;
}
