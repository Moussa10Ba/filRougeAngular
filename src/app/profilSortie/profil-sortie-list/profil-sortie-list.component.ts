import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../Service/profil.service';
import {ProfilSortie} from '../../Model/ProfilSortie';
import {ProfilSortieService} from '../../Service/profil-sortie.service';

@Component({
  selector: 'app-profil-sortie-list',
  templateUrl: './profil-sortie-list.component.html',
  styleUrls: ['./profil-sortie-list.component.css']
})
export class ProfilSortieListComponent implements OnInit {

  profilsSorties: ProfilSortie[] = [];
  constructor(private profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
    this.profilSortieService.getProfilsSortie().subscribe(
       profilsortie => {
        this.profilsSorties = profilsortie;
        console.log(this.profilsSorties);
      }
    );
  }
  // tslint:disable-next-line:typedef
  onDelete(id) {
    this.profilSortieService.deleteProfilSortie(id).subscribe(
      ok => {
        console.log('DELETE');
        this.profilSortieService.getProfilsSortie().subscribe(
          profilsortie => {
            this.profilsSorties = profilsortie;
            console.log(this.profilsSorties);
          }
        );
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(profilSortieForm){
    console.log(profilSortieForm.value.libelleProfilSortie);
    console.log(profilSortieForm.value);
    this.profilSortieService.addProfilSortie(profilSortieForm.value.libelleProfilSortie).subscribe(
       ok => {
           alert('Succes');
       },
       error => {
         alert('Error');
       }
    );
  }
}
