"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotoService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const voto_entity_1 = require("./entities/voto.entity");
let VotoService = class VotoService extends client_1.PrismaClient {
    create(createVotoDto) {
        return this.voto.create({ data: createVotoDto });
    }
    votar(participante, escolha) {
        const voto = new voto_entity_1.Voto();
        voto.participanteId = participante.id;
        voto.quantidadeVotos = participante.quantidadeON;
        voto.escolhaId = escolha.id;
        return this.create(voto);
    }
    async findAll() {
        return await this.voto.findMany();
    }
    async findOne(id) {
        return await this.voto.findUnique({
            where: { id },
        });
    }
    async update(id, updateVotoDto) {
        return await this.voto.update({
            where: { id },
            data: updateVotoDto,
        });
    }
    async remove(id) {
        return await this.voto.delete({ where: { id } });
    }
};
VotoService = __decorate([
    (0, common_1.Injectable)()
], VotoService);
exports.VotoService = VotoService;
//# sourceMappingURL=voto.service.js.map