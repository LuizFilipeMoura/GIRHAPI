"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBvdDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bvd_dto_1 = require("./create-bvd.dto");
class UpdateBvdDto extends (0, mapped_types_1.PartialType)(create_bvd_dto_1.CreateBvdDto) {
}
exports.UpdateBvdDto = UpdateBvdDto;
//# sourceMappingURL=update-bvd.dto.js.map