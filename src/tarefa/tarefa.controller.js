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
exports.TarefaController = void 0;
var common_1 = require("@nestjs/common");
var TarefaController = /** @class */ (function () {
    function TarefaController(tarefaService) {
        this.tarefaService = tarefaService;
    }
    TarefaController.prototype.create = function (createTarefaDto) {
        return this.tarefaService.create(createTarefaDto);
    };
    TarefaController.prototype.findAll = function () {
        return this.tarefaService.findAll();
    };
    TarefaController.prototype.findOne = function (id) {
        return this.tarefaService.findOne(+id);
    };
    TarefaController.prototype.update = function (id, updateTarefaDto) {
        return this.tarefaService.update(+id, updateTarefaDto);
    };
    TarefaController.prototype.remove = function (id) {
        return this.tarefaService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TarefaController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], TarefaController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TarefaController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TarefaController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TarefaController.prototype, "remove");
    TarefaController = __decorate([
        (0, common_1.Controller)('tarefa')
    ], TarefaController);
    return TarefaController;
}());
exports.TarefaController = TarefaController;
