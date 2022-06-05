import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
export declare class TurnoService {
    create(createTurnoDto: CreateTurnoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTurnoDto: UpdateTurnoDto): string;
    remove(id: string): string;
}
