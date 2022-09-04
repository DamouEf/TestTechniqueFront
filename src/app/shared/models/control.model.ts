import { Intervenant } from "./intervenant.model";

export interface Control {
    id: number;
    intitule: string;
    type: string
    chambre: number
    intervenants: Intervenant[]
}

