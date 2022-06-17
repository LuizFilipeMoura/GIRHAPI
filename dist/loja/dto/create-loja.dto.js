"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLojaDto = exports.CreateLojaColaboradoresRelationInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_colaborador_dto_1 = require("../../colaborador/dto/create-colaborador.dto");
const connect_colaborador_dto_1 = require("../../colaborador/dto/connect-colaborador.dto");
class CreateLojaColaboradoresRelationInputDto {
}
exports.CreateLojaColaboradoresRelationInputDto = CreateLojaColaboradoresRelationInputDto;
let CreateLojaDto = class CreateLojaDto {
};
CreateLojaDto = __decorate([
    (0, swagger_1.ApiExtraModels)(create_colaborador_dto_1.CreateColaboradorDto, connect_colaborador_dto_1.ConnectColaboradorDto, CreateLojaColaboradoresRelationInputDto)
], CreateLojaDto);
exports.CreateLojaDto = CreateLojaDto;
//# sourceMappingURL=create-loja.dto.js.map