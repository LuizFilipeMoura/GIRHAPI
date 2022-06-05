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
exports.VotoController = void 0;
const common_1 = require("@nestjs/common");
const voto_service_1 = require("./voto.service");
const create_voto_dto_1 = require("./dto/create-voto.dto");
const update_voto_dto_1 = require("./dto/update-voto.dto");
let VotoController = class VotoController {
    constructor(votoService) {
        this.votoService = votoService;
    }
    create(createVotoDto) {
        return this.votoService.create(createVotoDto);
    }
    findAll() {
        return this.votoService.findAll();
    }
    findOne(id) {
        return this.votoService.findOne(id);
    }
    update(id, updateVotoDto) {
        return this.votoService.update(id, updateVotoDto);
    }
    remove(id) {
        return this.votoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voto_dto_1.CreateVotoDto]),
    __metadata("design:returntype", void 0)
], VotoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VotoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VotoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_voto_dto_1.UpdateVotoDto]),
    __metadata("design:returntype", void 0)
], VotoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VotoController.prototype, "remove", null);
VotoController = __decorate([
    (0, common_1.Controller)('voto'),
    __metadata("design:paramtypes", [voto_service_1.VotoService])
], VotoController);
exports.VotoController = VotoController;
//# sourceMappingURL=voto.controller.js.map