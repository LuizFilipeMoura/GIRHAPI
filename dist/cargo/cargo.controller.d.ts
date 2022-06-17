import { CargoService } from './cargo.service';
import { Cargo } from './entities/cargo.entity';
export declare class CargoController {
    private readonly cargoService;
    constructor(cargoService: CargoService);
    create(cargo: Cargo): Promise<void>;
    findAll(): Promise<(import(".prisma/client").Cargo & {
        tarefas: import(".prisma/client").Tarefa[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Cargo & {
        tarefas: import(".prisma/client").Tarefa[];
    }>;
    update(id: string, updateCargoDto: Cargo): Promise<import(".prisma/client").Cargo>;
    remove(id: string): Promise<import(".prisma/client").Cargo>;
}
