
import {ApiExtraModels} from '@nestjs/swagger'
import {CreateCargoDto} from '../../cargo/dto/create-cargo.dto'
import {ConnectCargoDto} from '../../cargo/dto/connect-cargo.dto'

export class CreateTarefaCargoRelationInputDto {
    create?: CreateCargoDto;
connect?: ConnectCargoDto;
  }

@ApiExtraModels(CreateCargoDto,ConnectCargoDto,CreateTarefaCargoRelationInputDto)
export class CreateTarefaDto {
  id?: string;
descricao?: string;
passos: string[];
grupo?: string;
recorrencia?: number;
prioridade?: number;
Cargo?: CreateTarefaCargoRelationInputDto;
}
