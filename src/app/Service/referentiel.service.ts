import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Referentiel} from '../Model/Referentiel';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  addReferentiel(data): Observable<any>{
    return this.http.post<any>(this.url + '/admin/referentiel/add' , data);
  }
  // @ts-ignore
  getReferentiel(): Observable<Referentiel[]>{
    return this.http.get<Referentiel[]>(this.url + '/admin/referentiels');
  }
  // @ts-ignore
  deleteReferentiel(id: number): Observable<any>
  {
    return this.http.delete(this.url + '/admin/referentiels/' + id);
  }
}
