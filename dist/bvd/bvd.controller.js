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
exports.BvdController = void 0;
const common_1 = require("@nestjs/common");
const bvd_service_1 = require("./bvd.service");
const create_bvd_dto_1 = require("./dto/create-bvd.dto");
const update_bvd_dto_1 = require("./dto/update-bvd.dto");
const platform_express_1 = require("@nestjs/platform-express");
const nest_csv_parser_1 = require("nest-csv-parser");
const fs = require("fs");
const csv_parse_1 = require("csv-parse");
class Entity {
}
let BvdController = class BvdController {
    constructor(bvdService, csvParser) {
        this.bvdService = bvdService;
        this.csvParser = csvParser;
    }
    create(createBvdDto) {
        return this.bvdService.create(createBvdDto);
    }
    async uploadBvd(file, body) {
        console.log(file);
        const results = [];
        fs.createReadStream(`./bvd_files/${file.filename}`)
            .pipe((0, csv_parse_1.parse)({ delimiter: ';' }))
            .on('data', (data) => results.push(data))
            .on('end', () => {
            const { assembleiaId } = body;
            this.bvdService.parse(results, assembleiaId);
        });
    }
    findAll() {
        return this.bvdService.findAll();
    }
    findOne(id) {
        return this.bvdService.findOne(id);
    }
    update(id, updateBvdDto) {
        return this.bvdService.update(id, updateBvdDto);
    }
    remove(id) {
        return this.bvdService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bvd_dto_1.CreateBvdDto]),
    __metadata("design:returntype", void 0)
], BvdController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { dest: './bvd_files', preservePath: true })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BvdController.prototype, "uploadBvd", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BvdController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BvdController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bvd_dto_1.UpdateBvdDto]),
    __metadata("design:returntype", void 0)
], BvdController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BvdController.prototype, "remove", null);
BvdController = __decorate([
    (0, common_1.Controller)('bvd'),
    __metadata("design:paramtypes", [bvd_service_1.BvdService,
        nest_csv_parser_1.CsvParser])
], BvdController);
exports.BvdController = BvdController;
//# sourceMappingURL=bvd.controller.js.map