import { CreateTarefaDto } from '../../tarefa/dto/create-tarefa.dto';
import { ConnectTarefaDto } from '../../tarefa/dto/connect-tarefa.dto';
import { CreateColaboradorDto } from '../../colaborador/dto/create-colaborador.dto';
import { ConnectColaboradorDto } from '../../colaborador/dto/connect-colaborador.dto';
export declare class UpdateCargoTarefasRelationInputDto {
    create?: CreateTarefaDto[];
    connect?: ConnectTarefaDto[];
}
export declare class UpdateCargoColaboradoresRelationInputDto {
    create?: CreateColaboradorDto[];
    connect?: ConnectColaboradorDto[];
}
export declare class UpdateCargoDto {
    id?: string;
    diasNaFuncao?: number;
    planoDeCarreira?: number;
    nome?: string;
    salarioFixo?: number;
    descricaoSalario?: string;
    temComissaoSobreVendas?: boolean;
    temComissaoUnitaria?: boolean;
    temComissaoVendasLoja?: boolean;
    temMetasLoja?: boolean;
    temMetasIndividuais?: boolean;
    temAleloPremiacao?: boolean;
    temBradescoDental?: boolean;
    temSeguroDeVida?: boolean;
    temPlanoDeSaude?: boolean;
    temBonusDomingo?: boolean;
    temGratificacao?: boolean;
    temGarantiaMinima?: boolean;
    temQuebraDeCaixaHolerit?: boolean;
    temQuebraDeCaixaAlelo?: boolean;
    temPericulosidade?: boolean;
    descontinuado?: boolean;
    cargoAtivo?: boolean;
    valorAlelo?: number;
    valorGratificacao?: number;
    comissao?: number;
    beneficios?: string[];
    tarefas?: UpdateCargoTarefasRelationInputDto;
    colaboradores?: UpdateCargoColaboradoresRelationInputDto;
}
