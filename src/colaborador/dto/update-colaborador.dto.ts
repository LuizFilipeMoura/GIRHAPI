
import {ApiExtraModels} from '@nestjs/swagger'
import {CreateCargoDto} from '../../cargo/dto/create-cargo.dto'
import {ConnectCargoDto} from '../../cargo/dto/connect-cargo.dto'
import {CreateLojaDto} from '../../loja/dto/create-loja.dto'
import {ConnectLojaDto} from '../../loja/dto/connect-loja.dto'

export class UpdateColaboradorCargoRelationInputDto {
    create?: CreateCargoDto;
connect?: ConnectCargoDto;
  }
export class UpdateColaboradorLojaRelationInputDto {
    create?: CreateLojaDto;
connect?: ConnectLojaDto;
  }

@ApiExtraModels(CreateCargoDto,ConnectCargoDto,UpdateColaboradorCargoRelationInputDto,CreateLojaDto,ConnectLojaDto,UpdateColaboradorLojaRelationInputDto)
export class UpdateColaboradorDto {
  id?: string;
cpf?: string;
nome?: string;
matricula?: number;
sexo?: string;
pai?: string;
mae?: string;
nacionalidadePai?: string;
nacionalidadeMae?: string;
dataNascimento?: string;
idade?: number;
nacionalidade?: string;
localNascimento?: string;
estado?: string;
estadoCivil?: string;
deficienteFisico?: boolean;
tipoDeficiencia?: string;
racaCor?: string;
telefone?: string;
celular?: string;
telefoneRec?: string;
email?: string;
admissao?: string;
selario?: number;
setor?: string;
horarioTrabalho?: string;
venc1Experiencia?: string;
venc2Experiencia?: string;
endereco?: string;
cargo?: UpdateColaboradorCargoRelationInputDto;
Loja?: UpdateColaboradorLojaRelationInputDto;
}
