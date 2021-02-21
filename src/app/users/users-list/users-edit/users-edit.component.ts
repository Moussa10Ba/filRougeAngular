import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../Service/user.service';
import {User} from '../../../Model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfilService} from '../../../Service/profil.service';
import {Profil} from '../../../Model/Profil';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  fileToUpload: any;
  profils: Profil[] = [];
  public imagePath;
  imageUrl: any;
  imgURL: any;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private profilService: ProfilService,
              private router: Router
  ) {
    this.profilService.getProfils().subscribe(
      (profil) => {
        this.profils = profil;
      },
      (error) => {
        alert('Server is Down');
      }
    );
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      nom: new FormControl(null,
        [

        ]
      ),
      prenom: new FormControl(null,
        [

        ]
      ),
      email: new FormControl(null,
        [


        ]
      ),
      profil: new FormControl(null,
        [

        ]
      ),
      photo: new FormControl(null,
        [

        ],
      ),
      username: new FormControl(null,
        [

        ],
      ),
    });

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
            this.registerForm.get('nom').patchValue(this.user.nom);
            this.registerForm.get('prenom').patchValue(this.user.prenom);
            this.registerForm.get('email').patchValue(this.user.email);
            this.registerForm.get('username').patchValue(this.user.login);
            this.registerForm.get('profil').patchValue(this.user.profil);
          }
        );
      }
    );
  }
  // tslint:disable-next-line:typedef
  onFileSelect(event)
  {
    if (event.target.files.length > 0)
    {
      // alert('une image a été electionné');
      const file = (event.target as HTMLInputElement).files[0];

      this.registerForm.patchValue({photo: file });
      this.registerForm.get('photo').updateValueAndValidity();
    }
  }
  // tslint:disable-next-line:typedef
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    const userUpdate = new FormData();
    const data = this.registerForm.value;
    this.userService.updateUser(this.user.id, data).
    subscribe(
      ok => {
        alert('updated');
        this.router.navigate(['/users']);
      },
      err => {
        alert('error');
      }
    );
  }

}
