"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BvdModule = void 0;
const common_1 = require("@nestjs/common");
const bvd_service_1 = require("./bvd.service");
const bvd_controller_1 = require("./bvd.controller");
const nest_csv_parser_1 = require("nest-csv-parser");
let BvdModule = class BvdModule {
};
BvdModule = __decorate([
    (0, common_1.Module)({
        imports: [nest_csv_parser_1.CsvModule],
        controllers: [bvd_controller_1.BvdController],
        providers: [bvd_service_1.BvdService]
    })
], BvdModule);
exports.BvdModule = BvdModule;
//# sourceMappingURL=bvd.module.js.map