"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssembleiaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let AssembleiaService = class AssembleiaService extends client_1.PrismaClient {
    create(createAssembleiaDto) {
        return this.assembleia.create({ data: createAssembleiaDto });
    }
    async findAll() {
        return await this.assembleia.findMany();
    }
    findOne(id) {
        return this.assembleia.findUnique({
            where: { id },
            include: { pautas: true },
        });
    }
    findPautas(assembleiaId) {
        return this.pauta.findMany({ where: { assembleiaId } });
    }
    findParticipantes(assembleiaId) {
        return this.participante.findMany({ where: { assembleiaId } });
    }
    async update(id, updateAssembleiaDto) {
        return await this.assembleia.update({
            where: { id },
            data: updateAssembleiaDto,
        });
    }
    async remove(id) {
        return await this.assembleia.delete({ where: { id } });
    }
};
AssembleiaService = __decorate([
    (0, common_1.Injectable)()
], AssembleiaService);
exports.AssembleiaService = AssembleiaService;
//# sourceMappingURL=assembleia.service.js.map