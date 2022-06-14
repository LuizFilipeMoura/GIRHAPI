
import {ApiExtraModels} from '@nestjs/swagger'
import {CreateColaboradorDto} from '../../colaborador/dto/create-colaborador.dto'
import {ConnectColaboradorDto} from '../../colaborador/dto/connect-colaborador.dto'

export class UpdateLojaColaboradoresRelationInputDto {
    create?: CreateColaboradorDto[];
connect?: ConnectColaboradorDto[];
  }

@ApiExtraModels(CreateColaboradorDto,ConnectColaboradorDto,UpdateLojaColaboradoresRelationInputDto)
export class UpdateLojaDto {
  id?: string;
nome?: string;
endereco?: string;
colaboradores?: UpdateLojaColaboradoresRelationInputDto;
}
