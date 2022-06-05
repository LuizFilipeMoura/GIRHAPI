import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
export declare class ColaboradorService {
    create(createColaboradorDto: CreateColaboradorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateColaboradorDto: UpdateColaboradorDto): string;
    remove(id: string): string;
}
