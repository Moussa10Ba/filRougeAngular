import { Component, OnInit } from '@angular/core';
import {GroupeCompetence} from '../../Model/GroupeCompetence';
import {GroupecompetenceService} from '../../Service/groupecompetence.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Competence} from '../../Model/Competence';
import {CompetencesService} from '../../Service/competences.service';
import {Niveau} from '../../Model/Niveau';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.css']
})
export class CompetenceListComponent implements OnInit {
  groupeCompetences: GroupeCompetence[] = [];
  myForm: FormGroup;
  niveaux: Niveau[] = [];
  competences: Competence[] = [];

  constructor(private groupeCompetenceService: GroupecompetenceService,
              private formbuilder: FormBuilder,
              private competenceService: CompetencesService
  ) {
  }

  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      groupeCompetence: [Validators.required]
    });
    this.groupeCompetenceService.getGroupeComptences().subscribe(
      groupeComp => {
        this.groupeCompetences = groupeComp;
      }
    );
  }

  // tslint:disable-next-line:typedef
  alerter(message: string) {
    this.niveaux = [];
    const obj = this.myForm.value;
    const result = Object.keys(obj).map((key) => [String(key), obj[key]]);
    // tslint:disable-next-line:radix
    const id = (parseInt((result[0][1])));
    this.groupeCompetenceService.getComptencesByIdGroupeCompetences(id).subscribe(
      competence => {
        this.competences = competence;
        console.log(competence);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getNiveau(id: number) {
    this.niveaux = [];
    this.competenceService.getNiveauxById(id).subscribe(
      niveau => {
        this.niveaux = niveau;
        console.log(niveau);
      }
    );
  }
}
