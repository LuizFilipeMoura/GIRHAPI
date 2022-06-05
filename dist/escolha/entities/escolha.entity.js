"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escolha = exports.EscolhaBase = void 0;
class EscolhaBase {
}
exports.EscolhaBase = EscolhaBase;
class Escolha extends EscolhaBase {
    constructor(opcao, ordem, pautaId) {
        super();
        this.opcao = opcao;
        this.ordem = ordem;
        this.pautaId = pautaId;
    }
}
exports.Escolha = Escolha;
//# sourceMappingURL=escolha.entity.js.map