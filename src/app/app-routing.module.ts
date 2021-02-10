import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UsersAddComponent} from './users/users-add/users-add.component';
import {GroupeCompetenceListComponent} from './groupeCompetence/groupe-competence-list/groupe-competence-list.component';
import {GroupeCompetenceAddComponent} from './groupeCompetence/groupe-competence-add/groupe-competence-add.component';
import {AdminComponent} from './acceuil/admin/admin.component';
import {ProfilSortieListComponent} from './profilSortie/profil-sortie-list/profil-sortie-list.component';
import {CompetenceListComponent} from './competence/competence-list/competence-list.component';
import {CompetenceAddComponent} from './competence/competence-add/competence-add.component';
import {ProfilListComponent} from './profil/profil-list/profil-list.component';
import {ProfilAddComponent} from './profil/profil-add/profil-add.component';
import {ReferentielListComponent} from './referentiel/referentiel-list/referentiel-list.component';
import {ReferentielAddComponent} from './referentiel/referentiel-add/referentiel-add.component';
import {PromoAddComponent} from './promo/promo-add/promo-add.component';
import {UsersDetailsComponent} from './users/users-list/users-details/users-details.component';

const routes: Routes = [
 {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: 'goupecompetence', component: GroupeCompetenceListComponent},
  {path: 'groupecompetenceadd', component: GroupeCompetenceAddComponent},
  {path: 'competence', component: CompetenceListComponent},
  {path: 'competenceadd', component: CompetenceAddComponent},
  {path: 'profils', component: ProfilListComponent,
    children: [
      {path: 'editprofil/:id', component: ProfilListComponent},
    ]
  },
  /*{path: 'profiladd', component: ProfilAddComponent},*/
  {path: 'profilsortie', component: ProfilSortieListComponent},
  {path: 'referentiel', component: ReferentielListComponent},
  {path: 'referentieladd', component: ReferentielAddComponent},
  {path: 'promoadd', component: PromoAddComponent},
  {path: 'users',
    component:
    UsersListComponent, children: [
          {path: 'details/:id', component: UsersDetailsComponent},
          {path: 'usersadd', component: UsersAddComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
