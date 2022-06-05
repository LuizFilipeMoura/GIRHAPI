"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BvdService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const participante_entity_1 = require("../participante/entities/participante.entity");
const voto_entity_1 = require("../voto/entities/voto.entity");
const pauta_entity_1 = require("../pauta/entities/pauta.entity");
let BvdService = class BvdService extends client_1.PrismaClient {
    create(createBvdDto) {
        return this.bvd.create({ data: createBvdDto });
    }
    async findAll() {
        return await this.bvd.findMany();
    }
    uploadBVD(assembleia, participante, votos) {
        return;
    }
    async findOne(id) {
        return await this.bvd.findUnique({
            where: { id },
        });
    }
    async update(id, updateBvdDto) {
        return await this.bvd.update({
            where: { id },
            data: updateBvdDto,
        });
    }
    async remove(id) {
        return await this.bvd.delete({ where: { id } });
    }
    async parse(planilha, assId) {
        const assembleia = await this.assembleia.findUnique({
            where: { id: assId },
        });
        console.log(assembleia);
        if (planilha.length >= 1) {
            let linhaCabecalhos = 0;
            let colunaCPFCNPJ = 0;
            for (let indexLinha = 0; indexLinha < planilha.length; indexLinha++) {
                for (let indexColuna = 0; indexColuna < planilha[indexLinha].length; indexColuna++) {
                    const celula = planilha[indexLinha][indexColuna].toLowerCase();
                    if (celula.includes('cpf') && celula.includes('cnpj')) {
                        linhaCabecalhos = indexLinha;
                        colunaCPFCNPJ = indexColuna;
                        break;
                    }
                }
            }
            let colunaNome = 0;
            let colunaQuantidadeAcoesVoto = 0;
            let colunaPauta = 0;
            let colunaEscolha = 0;
            for (let indexColuna = 0; indexColuna < planilha[linhaCabecalhos].length; indexColuna++) {
                const celula = planilha[linhaCabecalhos][indexColuna].toLowerCase();
                if (celula.includes('nome') && celula.includes('investidor')) {
                    colunaNome = indexColuna;
                }
                if (celula.includes('eo')) {
                    colunaQuantidadeAcoesVoto = indexColuna;
                }
                if (celula.includes('digo da delibera')) {
                    colunaPauta = indexColuna;
                }
                if (celula.includes('voto delibera')) {
                    colunaEscolha = indexColuna;
                }
            }
            const participantes = [];
            let indexParticipante = 0;
            const pautas = [];
            const votos = [];
            for (let indexLinha = linhaCabecalhos + 1; indexLinha < planilha.length; indexLinha++) {
                const linhaAtual = planilha[indexLinha];
                let participanteAtual = new participante_entity_1.Participante();
                if (participantes[indexParticipante]) {
                    participanteAtual = participantes[indexParticipante];
                }
                else {
                    participanteAtual.cpfcnpj = linhaAtual[colunaCPFCNPJ];
                    participanteAtual.quantidadeON = Number(linhaAtual[colunaQuantidadeAcoesVoto]);
                    participanteAtual.nome = linhaAtual[colunaNome];
                    participanteAtual.assembleiaId = assId;
                    participanteAtual = await this.participante.create({
                        data: participanteAtual,
                    });
                    participantes[indexParticipante] = participanteAtual;
                    indexParticipante++;
                }
                let pautaAtual = new pauta_entity_1.Pauta();
                const ordem = Number(linhaAtual[colunaPauta]);
                if (pautas[ordem]) {
                    pautaAtual = pautas[ordem];
                }
                else {
                    pautaAtual = await this.pauta.findFirst({
                        where: { assembleiaId: assId, ordem },
                        include: { escolhas: true },
                    });
                    pautas[ordem] = pautaAtual;
                }
                let escolhas = [];
                if (pautaAtual.escolhas) {
                    escolhas = pautaAtual.escolhas;
                }
                let votoAtual = new voto_entity_1.Voto();
                votoAtual.participanteId = participanteAtual.id;
                votoAtual.quantidadeVotos = participanteAtual.quantidadeON;
                votoAtual.escolhaId = '';
                console.log(pautaAtual);
            }
            console.log(participantes);
            console.log(planilha[linhaCabecalhos]);
        }
    }
};
BvdService = __decorate([
    (0, common_1.Injectable)()
], BvdService);
exports.BvdService = BvdService;
//# sourceMappingURL=bvd.service.js.map