"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = exports.CargoBase = void 0;
class CargoBase {
    constructor() {
        this.cargoAtivo = true;
        this.beneficios = [];
    }
}
exports.CargoBase = CargoBase;
class Cargo extends CargoBase {
    constructor() {
        super(...arguments);
        this.tarefas = [];
    }
}
exports.Cargo = Cargo;
//# sourceMappingURL=cargo.entity.js.map