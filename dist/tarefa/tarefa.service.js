"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TarefaService = class TarefaService extends client_1.PrismaClient {
    create(createTarefaDto) {
        return this.tarefa.create({ data: createTarefaDto });
    }
    async findAll() {
        return await this.tarefa.findMany();
    }
    async findOne(id) {
        return await this.tarefa.findUnique({
            where: { id },
        });
    }
    async update(id, updateTarefaDto) {
        return await this.tarefa.update({
            where: { id },
            data: updateTarefaDto,
        });
    }
    async remove(id) {
        return await this.tarefa.delete({ where: { id } });
    }
};
TarefaService = __decorate([
    (0, common_1.Injectable)()
], TarefaService);
exports.TarefaService = TarefaService;
//# sourceMappingURL=tarefa.service.js.map