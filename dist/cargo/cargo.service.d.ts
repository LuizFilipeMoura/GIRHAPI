import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoService {
    create(createCargoDto: CreateCargoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCargoDto: UpdateCargoDto): string;
    remove(id: string): string;
}
