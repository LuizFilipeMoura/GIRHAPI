
import {ApiExtraModels} from '@nestjs/swagger'
import {CreateCargoDto} from '../../cargo/dto/create-cargo.dto'
import {ConnectCargoDto} from '../../cargo/dto/connect-cargo.dto'

export class UpdateTarefaCargoRelationInputDto {
    create?: CreateCargoDto;
connect?: ConnectCargoDto;
  }

@ApiExtraModels(CreateCargoDto,ConnectCargoDto,UpdateTarefaCargoRelationInputDto)
export class UpdateTarefaDto {
  id?: string;
descricao?: string;
passos?: string[];
grupo?: string;
recorrencia?: number;
prioridade?: number;
Cargo?: UpdateTarefaCargoRelationInputDto;
}
