import { Component, OnInit } from '@angular/core';
import {User} from '../../Model/User';
import {AuthserviceService} from '../../Service/authservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isConnected = false;
  private user: any;
  constructor(private auth: AuthserviceService, private route: Router) {
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
  opened = false;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logOut(){
    this.auth.logout();
    this.isConnected = false;
    this.route.navigate(['login'])
      .then(() => {
        window.location.reload();
      });

  }
}
