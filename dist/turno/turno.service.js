"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnoService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TurnoService = class TurnoService extends client_1.PrismaClient {
    create(createTurnoDto) {
        return this.turno.create({ data: createTurnoDto });
    }
    async findAll() {
        return await this.turno.findMany();
    }
    async findOne(id) {
        return await this.turno.findUnique({
            where: { id },
        });
    }
    async update(id, updateTurnoDto) {
        return await this.turno.update({
            where: { id },
            data: updateTurnoDto,
        });
    }
    async remove(id) {
        return await this.turno.delete({ where: { id } });
    }
};
TurnoService = __decorate([
    (0, common_1.Injectable)()
], TurnoService);
exports.TurnoService = TurnoService;
//# sourceMappingURL=turno.service.js.map