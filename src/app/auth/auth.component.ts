import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthserviceService} from '../Service/authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  loading = false;
  returnUrl !: string;
  isValidUser: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authservice: AuthserviceService) { }

  ngOnInit(): void {
  /*  this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });*/
    this.loginForm = new FormGroup({
       login: new FormControl('',
         [
         Validators.required,
           Validators.minLength(5),
       ]
       ),
      password: new FormControl(null, [
        Validators.required,
      ])
    });
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.loginForm.controls;
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // Appel de notre service
    this.authservice.login(this.f.login.value, this.f.password.value)
      .pipe()
      //inscription à l'venement pour recevoir les donnéés
      .subscribe(
        // Si les données sont là
        data => {
          this.isValidUser = true;
          //console.log(data);
          // @ts-ignore
          this.authservice.getRole(data);
        },
        // S'il y'a erreur
        error => {

        }
      );
  }
}
