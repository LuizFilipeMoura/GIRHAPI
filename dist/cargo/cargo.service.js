"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CargoService = class CargoService extends client_1.PrismaClient {
    async create(createCargoDto) {
        const tarefas = createCargoDto.tarefas;
        delete createCargoDto.tarefas;
        const cargo = await this.cargo.create({
            data: Object.assign({}, createCargoDto),
        });
        if (tarefas) {
            tarefas.map(async (tarefa) => {
                tarefa['cargoId'] = cargo.id;
                const id = tarefa.id;
                delete tarefa.id;
                await this.tarefa.update({
                    where: { id },
                    data: Object.assign({}, tarefa),
                });
            });
        }
    }
    async findAll() {
        return await this.cargo.findMany({ include: { tarefas: true } });
    }
    async findOne(id) {
        return await this.cargo.findUnique({
            where: { id },
            include: { tarefas: true },
        });
    }
    async update(id, updateCargoDto) {
        const cargoId = updateCargoDto.id;
        delete updateCargoDto.id;
        const tarefas = updateCargoDto.tarefas;
        delete updateCargoDto.tarefas;
        if (tarefas) {
            tarefas.map(async (tarefa) => {
                tarefa['cargoId'] = cargoId;
                const id = tarefa.id;
                delete tarefa.id;
                await this.tarefa.update({
                    where: { id },
                    data: Object.assign({}, tarefa),
                });
            });
        }
        return await this.cargo.update({
            where: { id },
            data: Object.assign({}, updateCargoDto),
        });
    }
    async remove(id) {
        return await this.cargo.delete({ where: { id } });
    }
};
CargoService = __decorate([
    (0, common_1.Injectable)()
], CargoService);
exports.CargoService = CargoService;
//# sourceMappingURL=cargo.service.js.map