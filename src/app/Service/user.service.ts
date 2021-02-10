import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.url + '/admin/utilisateurs');
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(this.url + '/admin/utilisateurs/' + id);
  }
  // @ts-ignore
  getUserById(id): Observable<User>
  {
    return this.http.get<User>(this.url + '/admin/utilisateurs/' + id);
  }

  // @ts-ignore
  addUser(data): any{
    return this.http.post(this.url + '/admin/utilisateurs/add', data );
  }
}
