"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiposRecorrencia = exports.TIPOS_RECORRENCIA = exports.Tarefa = exports.TarefaBase = void 0;
class TarefaBase {
    constructor() {
        this.passos = [];
    }
}
exports.TarefaBase = TarefaBase;
class Tarefa extends TarefaBase {
}
exports.Tarefa = Tarefa;
var TIPOS_RECORRENCIA;
(function (TIPOS_RECORRENCIA) {
    TIPOS_RECORRENCIA[TIPOS_RECORRENCIA["DIARIO"] = 0] = "DIARIO";
    TIPOS_RECORRENCIA[TIPOS_RECORRENCIA["SEMANAL"] = 1] = "SEMANAL";
    TIPOS_RECORRENCIA[TIPOS_RECORRENCIA["QUINZENAL"] = 2] = "QUINZENAL";
    TIPOS_RECORRENCIA[TIPOS_RECORRENCIA["MENSAL"] = 3] = "MENSAL";
    TIPOS_RECORRENCIA[TIPOS_RECORRENCIA["QUANDO_HOUVER"] = 4] = "QUANDO_HOUVER";
    TIPOS_RECORRENCIA[TIPOS_RECORRENCIA["A_CADA_ATENDIMENTO"] = 5] = "A_CADA_ATENDIMENTO";
})(TIPOS_RECORRENCIA = exports.TIPOS_RECORRENCIA || (exports.TIPOS_RECORRENCIA = {}));
exports.tiposRecorrencia = [
    'Diário',
    'Semanal',
    'Quinzenal',
    'Mensal',
    'Quando houver',
    'A cada atendimento',
];
//# sourceMappingURL=tarefa.entity.js.map