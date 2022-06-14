import { ApiExtraModels } from '@nestjs/swagger';
import { CreateTarefaDto } from '../../tarefa/dto/create-tarefa.dto';
import { ConnectTarefaDto } from '../../tarefa/dto/connect-tarefa.dto';
import { CreateColaboradorDto } from '../../colaborador/dto/create-colaborador.dto';
import { ConnectColaboradorDto } from '../../colaborador/dto/connect-colaborador.dto';

export class UpdateCargoTarefasRelationInputDto {
  create?: CreateTarefaDto[];
  connect?: ConnectTarefaDto[];
}
export class UpdateCargoColaboradoresRelationInputDto {
  create?: CreateColaboradorDto[];
  connect?: ConnectColaboradorDto[];
}

@ApiExtraModels(
  CreateTarefaDto,
  ConnectTarefaDto,
  UpdateCargoTarefasRelationInputDto,
  CreateColaboradorDto,
  ConnectColaboradorDto,
  UpdateCargoColaboradoresRelationInputDto,
)
export class UpdateCargoDto {
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
