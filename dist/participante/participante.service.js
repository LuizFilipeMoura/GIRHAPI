"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ParticipanteService = class ParticipanteService extends client_1.PrismaClient {
    create(createParticipanteDto) {
        return this.participante.create({ data: createParticipanteDto });
    }
    async findAll() {
        return await this.participante.findMany();
    }
    async findOne(id) {
        return await this.participante.findUnique({
            where: { id },
        });
    }
    async update(id, updateParticipanteDto) {
        return await this.participante.update({
            where: { id },
            data: updateParticipanteDto,
        });
    }
    async remove(id) {
        return await this.participante.delete({ where: { id } });
    }
};
ParticipanteService = __decorate([
    (0, common_1.Injectable)()
], ParticipanteService);
exports.ParticipanteService = ParticipanteService;
//# sourceMappingURL=participante.service.js.map