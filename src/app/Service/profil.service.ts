import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Profil} from '../Model/Profil';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }

  // @ts-ignore
  getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.url + '/admin/profils?archive=false');
  }

  // @ts-ignore
  getProfilById(id): Observable<Profil> {
    return this.http.get<Profil>(this.url + '/admin/profils/' + id);
  }
  // tslint:disable-next-line:typedef
  deleteProfil(id): Observable<any>{
    return this.http.delete<any>(this.url + '/admin/profils/' + id);
  }
  // @ts-ignore
  getUsersByProfil(id): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/admin/profils/' + id + '/utilisateurs/');
  }
  addProfil(data): Observable<any> {
    return  this.http.post<any>(this.url + '/admin/profils', data);
  }
  // @ts-ignore
  updateProfil(id, data): Observable<any>{
    // @ts-ignore
    return this.http.put<any>(this.url + '/admin/profils' + id, data);
  }
}
