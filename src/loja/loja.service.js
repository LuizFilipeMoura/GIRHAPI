"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LojaService = void 0;
var common_1 = require("@nestjs/common");
var LojaService = /** @class */ (function () {
    function LojaService(prisma) {
        this.prisma = prisma;
    }
    LojaService.prototype.create = function (createLojaDto) {
        return this.prisma.loja.create({ data: createLojaDto });
    };
    LojaService.prototype.findAll = function () {
        return this.prisma.loja.findMany();
    };
    LojaService.prototype.findOne = function (id) {
        return this.prisma.loja.findUnique({ where: { id: id } });
    };
    LojaService.prototype.update = function (id, updateLojaDto) {
        return this.prisma.loja.update({ where: { id: id }, data: updateLojaDto });
    };
    LojaService.prototype.remove = function (id) {
        return this.prisma.loja["delete"]({ where: { id: id } });
    };
    LojaService = __decorate([
        (0, common_1.Injectable)()
    ], LojaService);
    return LojaService;
}());
exports.LojaService = LojaService;
