"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CreateCargoDto = void 0;
var cargo_entity_1 = require("../entities/cargo.entity");
var CreateCargoDto = /** @class */ (function (_super) {
    __extends(CreateCargoDto, _super);
    function CreateCargoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateCargoDto;
}(cargo_entity_1.CargoBase));
exports.CreateCargoDto = CreateCargoDto;
