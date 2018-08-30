import { Player } from '../player/player';

export class Team {
    Id: number;
    Picking: boolean;
    OwnerName: string;
    QBs: Player[];
    RBs: Player[];
    WRs: Player[];
    TEs: Player[];
    BE: Player[];
}
