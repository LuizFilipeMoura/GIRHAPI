import { Tarefa } from '../../tarefa/entities/tarefa.entity';

export class CargoBase {
  diasNaFuncao: number;
  planoDeCarreira: number;
  nome: string;

  salarioFixo: number;
  descricaoSalario: string;

  temComissaoSobreVendas: boolean;
  temComissaoUnitaria: boolean;
  temComissaoVendasLoja: boolean;
  temMetasLoja: boolean;
  temMetasIndividuais: boolean;
  temAleloPremiacao: boolean;
  temBradescoDental: boolean;
  temSeguroDeVida: boolean;
  temPlanoDeSaude: boolean;
  temBonusDomingo: boolean;
  temGratificacao: boolean;
  temGarantiaMinima: boolean;
  temQuebraDeCaixaHolerit: boolean;
  temQuebraDeCaixaAlelo: boolean;
  temPericulosidade: boolean;

  descontinuado: boolean;
  cargoAtivo = true;

  valorAlelo: number;
  valorGratificacao: number;

  comissao: number;
  beneficios: string[] = [];
}

export class Cargo extends CargoBase {
  tarefas: Tarefa[] = [];

  setor: { nome: string };
}
