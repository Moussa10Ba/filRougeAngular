import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  addReferentiel(data): Observable<any>{
    return this.http.post<any>(this.url + '/admin/referentiels' , data);
  }
}
