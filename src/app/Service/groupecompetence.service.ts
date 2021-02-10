import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupeCompetence} from '../Model/GroupeCompetence';
import {Competence} from '../Model/Competence';

@Injectable({
  providedIn: 'root'
})
export class GroupecompetenceService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }

  getGroupeComptences(): Observable<GroupeCompetence[]>
  {
    return  this.http.get<GroupeCompetence[]>(this.url + '/admin/groupe_competences');
  }

  addGroupeCompetence($data): Observable<any>
  {
    return this.http.post<any>(this.url + '/admin/groupe_competences', $data);
  }

  // @ts-ignore
  getComptencesByIdGroupeCompetences(id: number): Observable<Competence[]>
  {
    return this.http.get<Competence[]>(this.url + '/admin/groupe_competences' + '/' + id + '/' + 'competences');
  }

  deleteGroupeCompetence(id: number): Observable<any>{
    return this.http.delete(this.url + '/admin/groupe_competences/' + id);
  }
}
