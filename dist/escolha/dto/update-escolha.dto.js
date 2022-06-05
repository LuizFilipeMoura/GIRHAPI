"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEscolhaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_escolha_dto_1 = require("./create-escolha.dto");
class UpdateEscolhaDto extends (0, mapped_types_1.PartialType)(create_escolha_dto_1.CreateEscolhaDto) {
}
exports.UpdateEscolhaDto = UpdateEscolhaDto;
//# sourceMappingURL=update-escolha.dto.js.map