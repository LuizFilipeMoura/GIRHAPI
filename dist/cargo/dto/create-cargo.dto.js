"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCargoDto = exports.CreateCargoColaboradoresRelationInputDto = exports.CreateCargoTarefasRelationInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_tarefa_dto_1 = require("../../tarefa/dto/create-tarefa.dto");
const connect_tarefa_dto_1 = require("../../tarefa/dto/connect-tarefa.dto");
const create_colaborador_dto_1 = require("../../colaborador/dto/create-colaborador.dto");
const connect_colaborador_dto_1 = require("../../colaborador/dto/connect-colaborador.dto");
class CreateCargoTarefasRelationInputDto {
}
exports.CreateCargoTarefasRelationInputDto = CreateCargoTarefasRelationInputDto;
class CreateCargoColaboradoresRelationInputDto {
}
exports.CreateCargoColaboradoresRelationInputDto = CreateCargoColaboradoresRelationInputDto;
let CreateCargoDto = class CreateCargoDto {
};
CreateCargoDto = __decorate([
    (0, swagger_1.ApiExtraModels)(create_tarefa_dto_1.CreateTarefaDto, connect_tarefa_dto_1.ConnectTarefaDto, CreateCargoTarefasRelationInputDto, create_colaborador_dto_1.CreateColaboradorDto, connect_colaborador_dto_1.ConnectColaboradorDto, CreateCargoColaboradoresRelationInputDto)
], CreateCargoDto);
exports.CreateCargoDto = CreateCargoDto;
//# sourceMappingURL=create-cargo.dto.js.map