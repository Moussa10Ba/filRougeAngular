import { Injectable } from '@angular/core';
import {AuthserviceService} from '../Service/authservice.service';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService {

  constructor(private authService: AuthserviceService ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
          Accept: 'Application/json',
          /*'Content-Type': 'application/json'*/
        }
      });
    }

    return next.handle(request);
  }
}
