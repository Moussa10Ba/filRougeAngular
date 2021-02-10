import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profil} from '../Model/Profil';
import {ProfilSortie} from '../Model/ProfilSortie';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }
  getProfilsSortie(): Observable<ProfilSortie[]> {
    return this.http.get<ProfilSortie[]>(this.url + '/admin/profil_sorties');
  }

  // @ts-ignore
  deleteProfilSortie(id): Observable<any> {
    return this.http.delete<any>(this.url + '/admin/profil_sorties/' + id);
  }

  // @ts-ignore
  addProfilSortie(data): Observable<any> {
    return this.http.post<any>(this.url + '/admin/profil_sorties', { libelleProfilSortie : data});
  }

}
