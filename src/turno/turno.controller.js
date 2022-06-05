"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TurnoController = void 0;
var common_1 = require("@nestjs/common");
var TurnoController = /** @class */ (function () {
    function TurnoController(turnoService) {
        this.turnoService = turnoService;
    }
    TurnoController.prototype.create = function (createTurnoDto) {
        return this.turnoService.create(createTurnoDto);
    };
    TurnoController.prototype.findAll = function () {
        return this.turnoService.findAll();
    };
    TurnoController.prototype.findOne = function (id) {
        return this.turnoService.findOne(+id);
    };
    TurnoController.prototype.update = function (id, updateTurnoDto) {
        return this.turnoService.update(+id, updateTurnoDto);
    };
    TurnoController.prototype.remove = function (id) {
        return this.turnoService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TurnoController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], TurnoController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TurnoController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TurnoController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TurnoController.prototype, "remove");
    TurnoController = __decorate([
        (0, common_1.Controller)('turno')
    ], TurnoController);
    return TurnoController;
}());
exports.TurnoController = TurnoController;
