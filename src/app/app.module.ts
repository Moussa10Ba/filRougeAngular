import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersDetailsComponent } from './users/users-list/users-details/users-details.component';
import { ProfilAddComponent } from './profil/profil-add/profil-add.component';
import { ProfilListComponent } from './profil/profil-list/profil-list.component';
import { ProfilSortieListComponent } from './profilSortie/profil-sortie-list/profil-sortie-list.component';
import { GroupeCompetenceAddComponent } from './groupeCompetence/groupe-competence-add/groupe-competence-add.component';
import { GroupeCompetenceListComponent } from './groupeCompetence/groupe-competence-list/groupe-competence-list.component';
import { CompetenceListComponent } from './competence/competence-list/competence-list.component';
import { CompetenceAddComponent } from './competence/competence-add/competence-add.component';
import { AdminComponent } from './acceuil/admin/admin.component';
import { ReferentielListComponent } from './referentiel/referentiel-list/referentiel-list.component';
import { ReferentielAddComponent } from './referentiel/referentiel-add/referentiel-add.component';
import { PromoAddComponent } from './promo/promo-add/promo-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptorService} from './Helper/jwt-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatOptionModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersDetailsComponent,
    ProfilAddComponent,
    ProfilListComponent,
    ProfilSortieListComponent,
    GroupeCompetenceAddComponent,
    GroupeCompetenceListComponent,
    CompetenceListComponent,
    CompetenceAddComponent,
    AdminComponent,
    ReferentielListComponent,
    ReferentielAddComponent,
    PromoAddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatChipsModule,
    MatOptionModule,
    MatAutocompleteModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
