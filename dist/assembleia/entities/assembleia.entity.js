"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_ASSEMBLEIA = exports.PRESENCA = exports.FINALIDADE = exports.Assembleia = exports.AssembleiaBase = void 0;
class AssembleiaBase {
}
exports.AssembleiaBase = AssembleiaBase;
class Assembleia extends AssembleiaBase {
}
exports.Assembleia = Assembleia;
var FINALIDADE;
(function (FINALIDADE) {
    FINALIDADE[FINALIDADE["Teste"] = 0] = "Teste";
    FINALIDADE[FINALIDADE["Simulacao"] = 1] = "Simulacao";
    FINALIDADE[FINALIDADE["Oficial"] = 2] = "Oficial";
})(FINALIDADE = exports.FINALIDADE || (exports.FINALIDADE = {}));
var PRESENCA;
(function (PRESENCA) {
    PRESENCA[PRESENCA["Presencial"] = 0] = "Presencial";
    PRESENCA[PRESENCA["Online"] = 1] = "Online";
    PRESENCA[PRESENCA["Hibrido"] = 2] = "Hibrido";
})(PRESENCA = exports.PRESENCA || (exports.PRESENCA = {}));
var STATUS_ASSEMBLEIA;
(function (STATUS_ASSEMBLEIA) {
    STATUS_ASSEMBLEIA[STATUS_ASSEMBLEIA["Ativa"] = 0] = "Ativa";
    STATUS_ASSEMBLEIA[STATUS_ASSEMBLEIA["Finalizada"] = 1] = "Finalizada";
    STATUS_ASSEMBLEIA[STATUS_ASSEMBLEIA["Em_Andamento"] = 2] = "Em_Andamento";
})(STATUS_ASSEMBLEIA = exports.STATUS_ASSEMBLEIA || (exports.STATUS_ASSEMBLEIA = {}));
//# sourceMappingURL=assembleia.entity.js.map