import { Injectable } from '@angular/core';
import {User} from '../Model/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private currentUserSubject !: BehaviorSubject<User>;
  public currentUser !: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
    // return new Utilisateur();
  }

  // tslint:disable-next-line:typedef
  login(login: string, password: string) {
    return this.http.post<any>(environment.urlApi + '/login_check', { login, password })
      .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      }));
  }

  // tslint:disable-next-line:typedef
  getToken(data: any){
    const tokendecode = jwtDecode(data.token);
    return tokendecode;
  }
  // tslint:disable-next-line:typedef
  getRole(data: any){
    const tokendecode = jwtDecode(data.token);
    // @ts-ignore
    const role = tokendecode.roles[0];
    if (role === 'ROLE_ADMIN') {
      console.log('Je suis un admin');
      this.router.navigate(['/users']);
    }else if (role === 'ROLE_Formateur'){
      this.router.navigate(['/profils']);
    }
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    // this.currentUser = new Observable<User>();
    this.router.navigate(['/login']);
  }

}
