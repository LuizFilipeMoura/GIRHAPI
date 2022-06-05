"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssembleiaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_assembleia_dto_1 = require("./create-assembleia.dto");
class UpdateAssembleiaDto extends (0, mapped_types_1.PartialType)(create_assembleia_dto_1.CreateAssembleiaDto) {
}
exports.UpdateAssembleiaDto = UpdateAssembleiaDto;
//# sourceMappingURL=update-assembleia.dto.js.map