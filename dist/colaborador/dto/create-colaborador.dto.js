"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateColaboradorDto = exports.CreateColaboradorLojaRelationInputDto = exports.CreateColaboradorCargoRelationInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cargo_dto_1 = require("../../cargo/dto/create-cargo.dto");
const connect_cargo_dto_1 = require("../../cargo/dto/connect-cargo.dto");
const create_loja_dto_1 = require("../../loja/dto/create-loja.dto");
const connect_loja_dto_1 = require("../../loja/dto/connect-loja.dto");
class CreateColaboradorCargoRelationInputDto {
}
exports.CreateColaboradorCargoRelationInputDto = CreateColaboradorCargoRelationInputDto;
class CreateColaboradorLojaRelationInputDto {
}
exports.CreateColaboradorLojaRelationInputDto = CreateColaboradorLojaRelationInputDto;
let CreateColaboradorDto = class CreateColaboradorDto {
};
CreateColaboradorDto = __decorate([
    (0, swagger_1.ApiExtraModels)(create_cargo_dto_1.CreateCargoDto, connect_cargo_dto_1.ConnectCargoDto, CreateColaboradorCargoRelationInputDto, create_loja_dto_1.CreateLojaDto, connect_loja_dto_1.ConnectLojaDto, CreateColaboradorLojaRelationInputDto)
], CreateColaboradorDto);
exports.CreateColaboradorDto = CreateColaboradorDto;
//# sourceMappingURL=create-colaborador.dto.js.map