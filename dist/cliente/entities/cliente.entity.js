"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.ClienteBase = void 0;
class ClienteBase {
}
exports.ClienteBase = ClienteBase;
class Cliente extends ClienteBase {
    constructor(nome, cnpj) {
        super();
        this.nome = nome;
        this.cnpj = cnpj;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map