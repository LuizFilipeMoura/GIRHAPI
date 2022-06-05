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
exports.LojaController = void 0;
var common_1 = require("@nestjs/common");
var LojaController = /** @class */ (function () {
    function LojaController(lojaService) {
        this.lojaService = lojaService;
    }
    LojaController.prototype.create = function (createLojaDto) {
        return this.lojaService.create(createLojaDto);
    };
    LojaController.prototype.findAll = function () {
        return this.lojaService.findAll();
    };
    LojaController.prototype.findOne = function (id) {
        return this.lojaService.findOne(+id);
    };
    LojaController.prototype.update = function (id, updateLojaDto) {
        return this.lojaService.update(+id, updateLojaDto);
    };
    LojaController.prototype.remove = function (id) {
        return this.lojaService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], LojaController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], LojaController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], LojaController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], LojaController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], LojaController.prototype, "remove");
    LojaController = __decorate([
        (0, common_1.Controller)('loja')
    ], LojaController);
    return LojaController;
}());
exports.LojaController = LojaController;
