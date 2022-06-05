import { Cargo } from '../../cargo/entities/cargo.entity';

export class ColaboradorBase {
  cpf: string;
  nome: string;

  matricula: number;
  sexo: string;
  pai: string;
  mae: string;
  nacionalidadePai: string;
  nacionalidadeMae: string;

  dataNascimento: string;
  idade: number;
  nacionalidade: string;
  localNascimento: string;
  estado: string;
  estadoCivil: string;
  deficienteFisico: boolean;
  tipoDeficiencia: string;
  racaCor: string;
  telefone: string;
  celular: string;
  telefoneRec: string;
  email: string;
  admissao: string;
  selario: number;

  setor: string;

  horarioTrabalho: string;

  venc1Experiencia: string;
  venc2Experiencia: string;
  endereco: string;
}

export class Colaborador extends ColaboradorBase {
  cargoId: string;
  cargo: Cargo;
  id: string;
}
