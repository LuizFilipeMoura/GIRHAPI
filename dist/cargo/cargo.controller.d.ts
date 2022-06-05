import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoController {
    private readonly cargoService;
    constructor(cargoService: CargoService);
    create(createCargoDto: CreateCargoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCargoDto: UpdateCargoDto): string;
    remove(id: string): string;
}
