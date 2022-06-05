import { Participante } from '../../participante/entities/participante.entity';
export declare class BvdBase {
    id: string;
    criadoEm: string;
}
export declare class Bvd extends BvdBase {
    participantes?: Participante[];
    assembleiaId?: string;
}
