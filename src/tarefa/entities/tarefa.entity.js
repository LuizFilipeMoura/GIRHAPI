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
exports.tiposRecorrencia = exports.TIPOS_RECORRENCIA = exports.Tarefa = exports.TarefaBase = void 0;
var TarefaBase = /** @class */ (function () {
    function TarefaBase() {
        this.passos = [];
    }
    return TarefaBase;
}());
exports.TarefaBase = TarefaBase;
var Tarefa = /** @class */ (function (_super) {
    __extends(Tarefa, _super);
    function Tarefa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tarefa;
}(TarefaBase));
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
