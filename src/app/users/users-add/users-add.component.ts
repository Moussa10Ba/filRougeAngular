import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../../Service/profil.service';
import {Profil} from '../../Model/Profil';
import {UserService} from '../../Service/user.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../../Model/User';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  admin = '/api/admin/profils/56';
  formateur = '/api/admin/profils/54';
  cm = '/api/admin/profils/55';
  profils: Profil[] = [];
  object = {};
  fileToUpload: any;
  imageUrl: any;
  /*admin = '/api/admin/profils/56';
  formateur = '/api/admin/profils/54';
  cm = '/api/admin/profils/55';*/
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  registerForm: FormGroup;
  public imagePath;
  imgURL: any;
  /*profils: Profil [] = [];*/
  submitted = false;

  constructor(private profilService: ProfilService, private userService: UserService) {
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
          Validators.required,
        ]
      ),
      prenom: new FormControl(null,
        [
          Validators.required,
        ]
      ),
      email: new FormControl(null,
        [
          Validators.required,
          Validators.email,
        ]
      ),
      profil: new FormControl(null,
        [
          Validators.required
        ]
      ),
      photo: new FormControl(null,
        [
          Validators.required,
        ],
      ),
      username: new FormControl(null,
        [
          Validators.required,
        ],
      ),
    });
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.registerForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const attrs = ['nom', 'prenom', 'email', 'profil', 'photo', 'username'];
    const registerFormData = new FormData();
    for (const att of attrs) {
      registerFormData.append(att, this.registerForm.get(att).value);
    }


    const json = JSON.stringify(this.object);

    // tslint:disable-next-line:prefer-const
    this.userService.addUser(registerFormData).subscribe(
      ok => {
        console.log('ok');
      },
      pasOK => {
        console.log('error');
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

    //Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  // tslint:disable-next-line:typedef
  /*fileProgress(fileInput: any) {
    this.fileData = (fileInput.target.files[0] as File);
    this.preview();
  }*/

  // tslint:disable-next-line:typedef
 /* preview(file: any) {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/!*!/) == null) {
      return;
    }

    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }*/
}

/*
  user: User;
  registerForm: FormGroup;
  error = '';
  submitted = false;
  avatar = null;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router, private profilService: ProfilService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      profil: ['', Validators.required],

      photo: [''],
      username: ['', Validators.required],
    });
    this.profilService.getProfils().subscribe(
        profil => {
          this.profils = profil;
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

      this.registerForm.patchValue({avatar: file });
      this.registerForm.get('avatar').updateValueAndValidity();
      //this.registerForm.get('avatar').setValue(file);
      //this.avatar=file;
    }
  }

  // tslint:disable-next-line:typedef
  get f(){ return this.registerForm.controls; }

  // tslint:disable-next-line:typedef
  persistUser()
  {
    this.userService.addUser(this.user)
      .subscribe( (user) =>
        {
          this.resetUser();
          alert('ajouter avec succes');
        }

      );
  }
  // tslint:disable-next-line:typedef
  onSubmit()
  {
    const registerValue = this.registerForm.value;
    const attrs = ['nom', 'prenom', 'email', 'username' , 'profil', 'photo'];
    const registerFormData = new FormData();

    for (const att of attrs)
    {
      registerFormData.append(att, this.registerForm.get(att).value);
    }
    console.log(this.registerForm.value);
    console.log('--------------------');
    console.log(registerFormData);
    this.userService.addUser(this.registerForm.value)
      .subscribe(
        (user) => {
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        (err) => {
          alert('erreur survenue');
        }
      );
  }

  // tslint:disable-next-line:typedef
  resetUser()
  {
    this.user =
      {
        id: null, login: '', password: '', photo: '', token: '', username: '',
        nom: '',
        prenom : '',
        email: '',
        profil: null
      };
  }

}*/
