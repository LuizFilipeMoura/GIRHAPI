"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIPO_PAUTA = exports.STATUS_PAUTA = exports.Pauta = exports.PautaBase = void 0;
class PautaBase {
    constructor() {
        this.status = STATUS_PAUTA.NAO_INICIADA;
        this.tipoVoto = TIPO_PAUTA.APROVAR_REJEITAR_ABSTER;
    }
}
exports.PautaBase = PautaBase;
class Pauta extends PautaBase {
}
exports.Pauta = Pauta;
var STATUS_PAUTA;
(function (STATUS_PAUTA) {
    STATUS_PAUTA[STATUS_PAUTA["NAO_INICIADA"] = 0] = "NAO_INICIADA";
    STATUS_PAUTA[STATUS_PAUTA["HOMOLOGADA"] = 1] = "HOMOLOGADA";
    STATUS_PAUTA[STATUS_PAUTA["EM_VOTACAO"] = 2] = "EM_VOTACAO";
    STATUS_PAUTA[STATUS_PAUTA["TABULANDO"] = 3] = "TABULANDO";
})(STATUS_PAUTA = exports.STATUS_PAUTA || (exports.STATUS_PAUTA = {}));
var TIPO_PAUTA;
(function (TIPO_PAUTA) {
    TIPO_PAUTA[TIPO_PAUTA["APROVAR_REJEITAR_ABSTER"] = 0] = "APROVAR_REJEITAR_ABSTER";
    TIPO_PAUTA[TIPO_PAUTA["VOTO_MULTIPLO"] = 1] = "VOTO_MULTIPLO";
    TIPO_PAUTA[TIPO_PAUTA["CONSELHO_ADM"] = 2] = "CONSELHO_ADM";
    TIPO_PAUTA[TIPO_PAUTA["CONSELHO_FISCAL"] = 3] = "CONSELHO_FISCAL";
})(TIPO_PAUTA = exports.TIPO_PAUTA || (exports.TIPO_PAUTA = {}));
//# sourceMappingURL=pauta.entity.js.map