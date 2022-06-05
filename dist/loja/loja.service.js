"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma/prisma.service");
let LojaService = class LojaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createLojaDto) {
        return this.prisma.loja.create({ data: createLojaDto });
    }
    findAll() {
        return this.prisma.loja.findMany();
    }
    findOne(id) {
        return this.prisma.loja.findUnique({ where: { id } });
    }
    update(id, updateLojaDto) {
        return this.prisma.loja.update({ where: { id }, data: updateLojaDto });
    }
    remove(id) {
        return this.prisma.loja.delete({ where: { id } });
    }
};
LojaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LojaService);
exports.LojaService = LojaService;
//# sourceMappingURL=loja.service.js.map