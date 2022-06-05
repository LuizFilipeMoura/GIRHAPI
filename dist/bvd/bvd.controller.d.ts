/// <reference types="multer" />
import { BvdService } from './bvd.service';
import { CreateBvdDto } from './dto/create-bvd.dto';
import { UpdateBvdDto } from './dto/update-bvd.dto';
import { CsvParser } from 'nest-csv-parser';
export declare class BvdController {
    private readonly bvdService;
    private readonly csvParser;
    constructor(bvdService: BvdService, csvParser: CsvParser);
    create(createBvdDto: CreateBvdDto): import(".prisma/client").Prisma.Prisma__BvdClient<import(".prisma/client").Bvd>;
    uploadBvd(file: Express.Multer.File, body: any): Promise<void>;
    findAll(): Promise<import(".prisma/client").Bvd[]>;
    findOne(id: string): Promise<import(".prisma/client").Bvd>;
    update(id: string, updateBvdDto: UpdateBvdDto): Promise<import(".prisma/client").Bvd>;
    remove(id: string): Promise<import(".prisma/client").Bvd>;
}
