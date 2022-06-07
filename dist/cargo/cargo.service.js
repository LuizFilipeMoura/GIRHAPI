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
    create(createCargoDto) {
        return this.cargo.create({ data: createCargoDto });
    }
    async findAll() {
        return await this.cargo.findMany();
    }
    async findOne(id) {
        return await this.cargo.findUnique({
            where: { id },
        });
    }
    async update(id, updateCargoDto) {
        return await this.cargo.update({
            where: { id },
            data: updateCargoDto,
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