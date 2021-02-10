import {Profil} from './Profil';

export class User {
  id: number;
  prenom: string;
  nom?: string;
  username: string;
  password: string;
  login: string;
  email: string;
  token: string;
  photo: string;
  profil: Profil;
}
