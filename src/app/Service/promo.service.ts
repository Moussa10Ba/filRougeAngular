import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Promo} from '../Model/Promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private http: HttpClient) { }
  private url = environment.urlApi;
  addPromo(data): Observable<any>{
    return this.http.post<any>(this.url + '/admin/promo/add' , data);
  }
  getPromo(): Observable<Promo[]>{
    return this.http.get<Promo[]>(this.url + '/admin/promo');
  }
}
