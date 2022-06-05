"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_voto_dto_1 = require("./create-voto.dto");
class UpdateVotoDto extends (0, mapped_types_1.PartialType)(create_voto_dto_1.CreateVotoDto) {
}
exports.UpdateVotoDto = UpdateVotoDto;
//# sourceMappingURL=update-voto.dto.js.map