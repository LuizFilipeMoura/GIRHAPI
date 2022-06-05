export class TarefaBase {
  descricao: string;
  passos: string[] = [];

  grupo: any;
  recorrencia: number;
  prioridade: number;
}
export class Tarefa extends TarefaBase {}
export enum TIPOS_RECORRENCIA {
  DIARIO,
  SEMANAL,
  QUINZENAL,
  MENSAL,
  QUANDO_HOUVER,
  A_CADA_ATENDIMENTO,
}
export const tiposRecorrencia = [
  'Diário',
  'Semanal',
  'Quinzenal',
  'Mensal',
  'Quando houver',
  'A cada atendimento',
];
