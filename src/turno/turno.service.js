"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TurnoService = void 0;
var common_1 = require("@nestjs/common");
var TurnoService = /** @class */ (function () {
    function TurnoService() {
    }
    TurnoService.prototype.create = function (createTurnoDto) {
        return 'This action adds a new turno';
    };
    TurnoService.prototype.findAll = function () {
        return "This action returns all turno";
    };
    TurnoService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " turno");
    };
    TurnoService.prototype.update = function (id, updateTurnoDto) {
        return "This action updates a #".concat(id, " turno");
    };
    TurnoService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " turno");
    };
    TurnoService = __decorate([
        (0, common_1.Injectable)()
    ], TurnoService);
    return TurnoService;
}());
exports.TurnoService = TurnoService;
