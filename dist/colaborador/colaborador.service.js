"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColaboradorService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ColaboradorService = class ColaboradorService extends client_1.PrismaClient {
    create(createColaboradorDto) {
        return this.colaborador.create({ data: createColaboradorDto });
    }
    async findAll() {
        return await this.colaborador.findMany();
    }
    async findOne(id) {
        return await this.colaborador.findUnique({
            where: { id },
        });
    }
    async update(id, updateColaboradorDto) {
        return await this.colaborador.update({
            where: { id },
            data: updateColaboradorDto,
        });
    }
    async remove(id) {
        return await this.colaborador.delete({ where: { id } });
    }
};
ColaboradorService = __decorate([
    (0, common_1.Injectable)()
], ColaboradorService);
exports.ColaboradorService = ColaboradorService;
//# sourceMappingURL=colaborador.service.js.map