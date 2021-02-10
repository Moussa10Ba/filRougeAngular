/*
import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfilService} from '../../Service/profil.service';
import {Profil} from '../../Model/Profil';
import {NgForm} from '@angular/forms';
import {User} from '../../Model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {

    profils: Profil[] = [];
    users: User[] = [];
    submited = false;
    hiden = true;
  private profilForm: NgForm;
  constructor(private profilService: ProfilService, private router: Router) { }

  ngOnInit(): void {
    this.profilService.getProfils().subscribe(
      profil => {
         this.profils = profil;
      }
    );
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number){
    this.profilService.deleteProfil(id).subscribe(
      succes => {
        this.profilService.getProfils().subscribe(
          profil => {
            this.profils = profil;
            // tslint:disable-next-line:no-unused-expression
            this.router.navigate['/profils'];
          }
        );
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(profilForm) {
    this.profilService.addProfil(profilForm.value).subscribe(
      ok => {
        this.profilService.getProfils().subscribe(
          profil => {
            this.profils = profil;
            profilForm.reset();
          }
        );
      },
      error => {
        alert('Erreur Survenue lors de l\'ajout du profil' );
      }
    );
  }

  // tslint:disable-next-line:typedef
  listUsersByProfil(id: number){
    this.hiden = false;
    this.profilService.getUsersByProfil(id).subscribe(
      user => {
        this.users = user;
      }
    );
  }
  // tslint:disable-next-line:typedef
  onEdit(){
    this.profilForm.setValue({
      libelle: 'moussa',
    });
  }
}
*/
import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfilService} from '../../Service/profil.service';
import {Profil} from '../../Model/Profil';
import {NgForm} from '@angular/forms';
import {User} from '../../Model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {

  profils: Profil[] = [];
  users: User[] = [];
  submited = false;
  hiden = true;
  isAddMode: boolean;
  id: number;
  private profilForm: NgForm;
  constructor(private profilService: ProfilService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;
    this.route.params.subscribe(
      (params ) => {
      }
    );
    if (!this.isAddMode){
      this.profilService.getProfilById(+this.id)
        .pipe(first())
        .subscribe(
          libelle => this.profilForm.setValue(libelle),

        );

    }
    this.profilService.getProfils().subscribe(
      profil => {
        this.profils = profil;
      }
    );
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number){
    this.profilService.deleteProfil(id).subscribe(
      succes => {
        this.profilService.getProfils().subscribe(
          profil => {
            this.profils = profil;
            // tslint:disable-next-line:no-unused-expression
            this.router.navigate['/profils'];
          }
        );
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(profilForm) {
    this.profilService.addProfil(profilForm.value).subscribe(
      ok => {
        this.profilService.getProfils().subscribe(
          profil => {
            this.profils = profil;
            profilForm.reset();
          }
        );
      },
      error => {
        alert('Erreur Survenue lors de l\'ajout du profil' );
      }
    );
  }

  // tslint:disable-next-line:typedef
  listUsersByProfil(id: number){
    this.hiden = false;
    this.profilService.getUsersByProfil(id).subscribe(
      user => {
        this.users = user;
      }
    );
  }
  // tslint:disable-next-line:typedef
}
