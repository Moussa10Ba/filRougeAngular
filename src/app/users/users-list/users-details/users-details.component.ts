import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Service/user.service';
import {User} from '../../../Model/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const idUser: number = +this.route.snapshot.params.id;
    this.userService.getUserById(idUser).subscribe(
      user => {
        this.user = user;
      },
    );
    this.route.params.subscribe(
      (p) => {
        // tslint:disable-next-line:no-shadowed-variable
        const idUser = +p.id;
        this.userService.getUserById(idUser).subscribe(
          user => {
            this.user = user;
          }
        );
      }
    );
  }

}
