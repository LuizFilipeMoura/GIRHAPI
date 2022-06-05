"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePautaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pauta_dto_1 = require("./create-pauta.dto");
class UpdatePautaDto extends (0, mapped_types_1.PartialType)(create_pauta_dto_1.CreatePautaDto) {
}
exports.UpdatePautaDto = UpdatePautaDto;
//# sourceMappingURL=update-pauta.dto.js.map