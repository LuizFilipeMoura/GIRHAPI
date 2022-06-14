
import {ApiExtraModels} from '@nestjs/swagger'
import {CreateColaboradorDto} from '../../colaborador/dto/create-colaborador.dto'
import {ConnectColaboradorDto} from '../../colaborador/dto/connect-colaborador.dto'

export class CreateLojaColaboradoresRelationInputDto {
    create?: CreateColaboradorDto[];
connect?: ConnectColaboradorDto[];
  }

@ApiExtraModels(CreateColaboradorDto,ConnectColaboradorDto,CreateLojaColaboradoresRelationInputDto)
export class CreateLojaDto {
  id?: string;
nome?: string;
endereco?: string;
colaboradores?: CreateLojaColaboradoresRelationInputDto;
}
