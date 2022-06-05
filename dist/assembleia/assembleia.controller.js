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
exports.AssembleiaController = void 0;
const common_1 = require("@nestjs/common");
const assembleia_service_1 = require("./assembleia.service");
const create_assembleia_dto_1 = require("./dto/create-assembleia.dto");
const update_assembleia_dto_1 = require("./dto/update-assembleia.dto");
let AssembleiaController = class AssembleiaController {
    constructor(assembleiaService) {
        this.assembleiaService = assembleiaService;
    }
    create(createAssembleiaDto) {
        return this.assembleiaService.create(createAssembleiaDto);
    }
    async findAll() {
        return await this.assembleiaService.findAll();
    }
    async findPautas(id) {
        return await this.assembleiaService.findPautas(id);
    }
    async findParticipantes(id) {
        return await this.assembleiaService.findParticipantes(id);
    }
    findOne(id) {
        return this.assembleiaService.findOne(id);
    }
    async update(id, updateAssembleiaDto) {
        delete updateAssembleiaDto.id;
        return await this.assembleiaService.update(id, updateAssembleiaDto);
    }
    async remove(id) {
        return await this.assembleiaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_assembleia_dto_1.CreateAssembleiaDto]),
    __metadata("design:returntype", void 0)
], AssembleiaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssembleiaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('pautas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssembleiaController.prototype, "findPautas", null);
__decorate([
    (0, common_1.Get)('participantes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssembleiaController.prototype, "findParticipantes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssembleiaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_assembleia_dto_1.UpdateAssembleiaDto]),
    __metadata("design:returntype", Promise)
], AssembleiaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssembleiaController.prototype, "remove", null);
AssembleiaController = __decorate([
    (0, common_1.Controller)('assembleia'),
    __metadata("design:paramtypes", [assembleia_service_1.AssembleiaService])
], AssembleiaController);
exports.AssembleiaController = AssembleiaController;
//# sourceMappingURL=assembleia.controller.js.map