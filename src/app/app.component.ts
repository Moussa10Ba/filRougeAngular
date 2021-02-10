import { Component } from '@angular/core';
import {User} from './Model/User';
import {AuthserviceService} from './Service/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filRougeAngular';
  isConnected = false;
  private user: any;
  constructor(private auth: AuthserviceService) {
    this.auth.currentUser.subscribe(
      (user: User) => {
        if (user.token === undefined){
          this.isConnected = false;
        }else{
          this.isConnected = true;
        }
      }
    );
  }
}
