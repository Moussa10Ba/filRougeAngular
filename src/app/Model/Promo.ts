import {User} from './User';

export class Promo{
  id: number;
  referenceAgate: string;
  titre: string;
  lieu: string;
  dateDebut: Date;
  dateFin: Date;
  langue: string;
  apprennants: User;
  description: string;
  avatar: any;
}
