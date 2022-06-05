"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PautaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const pauta_entity_1 = require("./entities/pauta.entity");
const escolha_service_1 = require("../escolha/escolha.service");
const escolha_entity_1 = require("../escolha/entities/escolha.entity");
let PautaService = class PautaService extends client_1.PrismaClient {
    constructor(escolhaService) {
        super();
        this.escolhaService = escolhaService;
    }
    create(createPautaDto) {
        return this.pauta.create({ data: createPautaDto });
    }
    async findAll() {
        return await this.pauta.findMany();
    }
    findOne(id) {
        return this.pauta.findUnique({ where: { id } });
    }
    findEscolhas(pautaId) {
        return this.escolha.findMany({ where: { pautaId } });
    }
    async cadastrarPauta(pauta) {
        pauta = await this.create(pauta);
        if (pauta.tipoVoto === pauta_entity_1.TIPO_PAUTA.APROVAR_REJEITAR_ABSTER) {
            const escolhas = [
                new escolha_entity_1.Escolha('Aprovar', 1, pauta.id),
                new escolha_entity_1.Escolha('Rejeitar', 2, pauta.id),
                new escolha_entity_1.Escolha('Abster-se', 3, pauta.id),
            ];
            escolhas[0] = await this.escolhaService.create(escolhas[0]);
            escolhas[1] = await this.escolhaService.create(escolhas[1]);
            escolhas[2] = await this.escolhaService.create(escolhas[2]);
            console.log(escolhas);
        }
        return pauta;
    }
    async update(id, updatePautaDto) {
        return await this.pauta.update({
            where: { id },
            data: updatePautaDto,
        });
    }
    async remove(id) {
        const escolhas = await this.findEscolhas(id);
        escolhas.map((escolha) => this.escolhaService.remove(escolha.id));
        await Promise.all(escolhas);
        return await this.pauta.delete({ where: { id } });
    }
};
PautaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [escolha_service_1.EscolhaService])
], PautaService);
exports.PautaService = PautaService;
//# sourceMappingURL=pauta.service.js.map