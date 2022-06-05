"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColaboradorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_colaborador_dto_1 = require("./create-colaborador.dto");
class UpdateColaboradorDto extends (0, mapped_types_1.PartialType)(create_colaborador_dto_1.CreateColaboradorDto) {
}
exports.UpdateColaboradorDto = UpdateColaboradorDto;
//# sourceMappingURL=update-colaborador.dto.js.map