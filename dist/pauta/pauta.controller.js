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
exports.PautaController = void 0;
const common_1 = require("@nestjs/common");
const pauta_service_1 = require("./pauta.service");
const create_pauta_dto_1 = require("./dto/create-pauta.dto");
const update_pauta_dto_1 = require("./dto/update-pauta.dto");
let PautaController = class PautaController {
    constructor(pautaService) {
        this.pautaService = pautaService;
    }
    create(createPautaDto) {
        return this.pautaService.create(createPautaDto);
    }
    findAll() {
        return this.pautaService.findAll();
    }
    findOne(id) {
        return this.pautaService.findOne(id);
    }
    async update(id, updatePautaDto) {
        delete updatePautaDto.id;
        return await this.pautaService.update(id, updatePautaDto);
    }
    remove(id) {
        return this.pautaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pauta_dto_1.CreatePautaDto]),
    __metadata("design:returntype", void 0)
], PautaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PautaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PautaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pauta_dto_1.UpdatePautaDto]),
    __metadata("design:returntype", Promise)
], PautaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PautaController.prototype, "remove", null);
PautaController = __decorate([
    (0, common_1.Controller)('pauta'),
    __metadata("design:paramtypes", [pauta_service_1.PautaService])
], PautaController);
exports.PautaController = PautaController;
//# sourceMappingURL=pauta.controller.js.map