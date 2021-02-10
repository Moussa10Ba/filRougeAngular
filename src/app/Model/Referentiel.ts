import {Competence} from './Competence';

export class Referentiel{
  id: number;
  libelle: string;
  presentation: string;
  competences: Competence[];
  critereDeval: string;
  critereDad: string;
}
