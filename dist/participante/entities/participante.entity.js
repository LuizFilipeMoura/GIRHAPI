"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARTICIPACAO = exports.PERMISSAO = exports.TIPO_PARTICIPANTE = exports.STATUS_PARTICIPANTE = exports.Participante = exports.ParticipanteBase = void 0;
class ParticipanteBase {
}
exports.ParticipanteBase = ParticipanteBase;
class Participante extends ParticipanteBase {
}
exports.Participante = Participante;
var STATUS_PARTICIPANTE;
(function (STATUS_PARTICIPANTE) {
    STATUS_PARTICIPANTE[STATUS_PARTICIPANTE["Aprovado"] = 0] = "Aprovado";
    STATUS_PARTICIPANTE[STATUS_PARTICIPANTE["Reprovado"] = 1] = "Reprovado";
    STATUS_PARTICIPANTE[STATUS_PARTICIPANTE["Pendente"] = 2] = "Pendente";
})(STATUS_PARTICIPANTE = exports.STATUS_PARTICIPANTE || (exports.STATUS_PARTICIPANTE = {}));
var TIPO_PARTICIPANTE;
(function (TIPO_PARTICIPANTE) {
    TIPO_PARTICIPANTE[TIPO_PARTICIPANTE["Equipe"] = 0] = "Equipe";
    TIPO_PARTICIPANTE[TIPO_PARTICIPANTE["Acionista"] = 1] = "Acionista";
    TIPO_PARTICIPANTE[TIPO_PARTICIPANTE["Representante"] = 2] = "Representante";
    TIPO_PARTICIPANTE[TIPO_PARTICIPANTE["Outorgante"] = 3] = "Outorgante";
})(TIPO_PARTICIPANTE = exports.TIPO_PARTICIPANTE || (exports.TIPO_PARTICIPANTE = {}));
var PERMISSAO;
(function (PERMISSAO) {
    PERMISSAO[PERMISSAO["Administrador"] = 0] = "Administrador";
    PERMISSAO[PERMISSAO["Usuario"] = 1] = "Usuario";
    PERMISSAO[PERMISSAO["Master"] = 2] = "Master";
})(PERMISSAO = exports.PERMISSAO || (exports.PERMISSAO = {}));
var PARTICIPACAO;
(function (PARTICIPACAO) {
    PARTICIPACAO[PARTICIPACAO["Online"] = 0] = "Online";
    PARTICIPACAO[PARTICIPACAO["Presencial"] = 1] = "Presencial";
    PARTICIPACAO[PARTICIPACAO["Sem_Acesso"] = 2] = "Sem_Acesso";
})(PARTICIPACAO = exports.PARTICIPACAO || (exports.PARTICIPACAO = {}));
//# sourceMappingURL=participante.entity.js.map