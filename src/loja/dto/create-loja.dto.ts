import { LojaBase } from '../entities/loja.entity';

export class CreateLojaDto extends LojaBase {
  nome: string;
  endereco: string;
}
