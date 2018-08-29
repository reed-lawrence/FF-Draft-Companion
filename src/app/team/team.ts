import { Player } from "../player/player";

export class Team {
    Id: number;
    Picking: boolean;
    OwnerName: string;
    QB: Player;
    RBs: Player[];
    WRs: Player[];
    TEs: Player[];
    BE: Player[];
}
