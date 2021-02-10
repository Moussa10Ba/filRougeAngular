import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Competence} from '../Model/Competence';
import {Niveau} from '../Model/Niveau';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }
  // @ts-ignore
  getComptences(): Observable<Competence[]>
  {
   return  this.http.get<Competence[]>(this.url + '/admin/competences');
  }
  // @ts-ignore
  createCompetence($data): Observable<any>
  {
    return this.http.post<any>(this.url + '/admin/competences', $data);
  }
  // @ts-ignore
  getNiveauxById($id): Observable<Niveau[]>
  {
    return this.http.get<Niveau[]>(this.url + '/admin/competences/' + $id  + '/niveaux');
  }
}
