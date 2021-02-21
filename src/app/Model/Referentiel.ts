import {Competence} from './Competence';
import {GroupeCompetence} from './GroupeCompetence';

export class Referentiel{
  id: number;
  libelle: string;
  presentation: string;
  groupeCompetence: GroupeCompetence[];
  critereDev: string;
  critereDad: string;
  programme: any;
}
