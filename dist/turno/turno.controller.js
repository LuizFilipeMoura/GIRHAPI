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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnoController = void 0;
const common_1 = require("@nestjs/common");
const turno_service_1 = require("./turno.service");
const create_turno_dto_1 = require("./dto/create-turno.dto");
const update_turno_dto_1 = require("./dto/update-turno.dto");
let TurnoController = class TurnoController {
    constructor(turnoService) {
        this.turnoService = turnoService;
    }
    create(createTurnoDto) {
        return this.turnoService.create(createTurnoDto);
    }
    findAll() {
        return this.turnoService.findAll();
    }
    findOne(id) {
        return this.turnoService.findOne(id);
    }
    update(id, updateTurnoDto) {
        return this.turnoService.update(id, updateTurnoDto);
    }
    remove(id) {
        return this.turnoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_turno_dto_1.CreateTurnoDto]),
    __metadata("design:returntype", void 0)
], TurnoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TurnoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TurnoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_turno_dto_1.UpdateTurnoDto]),
    __metadata("design:returntype", void 0)
], TurnoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TurnoController.prototype, "remove", null);
TurnoController = __decorate([
    (0, common_1.Controller)('turno'),
    __metadata("design:paramtypes", [turno_service_1.TurnoService])
], TurnoController);
exports.TurnoController = TurnoController;
//# sourceMappingURL=turno.controller.js.map