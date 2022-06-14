
import {Tarefa} from '../../tarefa/entities/tarefa.entity'
import {Colaborador} from '../../colaborador/entities/colaborador.entity'


export class Cargo {
  id: string ;
diasNaFuncao: number  | null;
planoDeCarreira: number  | null;
nome: string  | null;
salarioFixo: number  | null;
descricaoSalario: string  | null;
temComissaoSobreVendas: boolean  | null;
temComissaoUnitaria: boolean  | null;
temComissaoVendasLoja: boolean  | null;
temMetasLoja: boolean  | null;
temMetasIndividuais: boolean  | null;
temAleloPremiacao: boolean  | null;
temBradescoDental: boolean  | null;
temSeguroDeVida: boolean  | null;
temPlanoDeSaude: boolean  | null;
temBonusDomingo: boolean  | null;
temGratificacao: boolean  | null;
temGarantiaMinima: boolean  | null;
temQuebraDeCaixaHolerit: boolean  | null;
temQuebraDeCaixaAlelo: boolean  | null;
temPericulosidade: boolean  | null;
descontinuado: boolean  | null;
cargoAtivo: boolean  | null;
valorAlelo: number  | null;
valorGratificacao: number  | null;
comissao: number  | null;
beneficios: string[] ;
tarefas?: Tarefa[] ;
colaboradores?: Colaborador[] ;
}
