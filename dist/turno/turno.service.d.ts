import { PrismaClient } from '@prisma/client';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
export declare class TurnoService extends PrismaClient {
    create(createTurnoDto: CreateTurnoDto): import(".prisma/client").Prisma.Prisma__TurnoClient<import(".prisma/client").Turno>;
    findAll(): Promise<import(".prisma/client").Turno[]>;
    findOne(id: string): Promise<import(".prisma/client").Turno>;
    update(id: string, updateTurnoDto: UpdateTurnoDto): Promise<import(".prisma/client").Turno>;
    remove(id: string): Promise<import(".prisma/client").Turno>;
}
