import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../Service/user.service';
import {User} from '../../Model/User';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      user => {
        this.users = user;
        console.log(this.users);
      },
      error => {
        console.log('Server is Down');
      }
    );
  }
  // tslint:disable-next-line:typedef
  OnDeleteUser(id: number){
    this.userService.deleteUser(id).subscribe(
      ok => {
        alert('Deleted');
        this.userService.getUsers().subscribe(
          user => {
            this.users = user;
            console.log(this.users);
          },
        );
      },
       error => {
        alert('Error');
       }
    );
  }

}
