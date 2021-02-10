import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupecompetenceService} from '../../Service/groupecompetence.service';
import {GroupeCompetence} from '../../Model/GroupeCompetence';
import {CompetencesService} from '../../Service/competences.service';

@Component({
  selector: 'app-competence-add',
  templateUrl: './competence-add.component.html',
  styleUrls: ['./competence-add.component.css']
})
export class CompetenceAddComponent implements OnInit {
  competenceForm: FormGroup;
  groupeCompetences: GroupeCompetence[] = [];
  constructor(private formBuilder: FormBuilder,
              private groupeCompetenceService: GroupecompetenceService,
              private competenceService: CompetencesService
              ) { }
  ngOnInit(): void {
    this.competenceForm = this.formBuilder.group({
      groupeCompetence: ['', Validators.required],
      libelle: ['', Validators.required],
      critereDeval1: ['', Validators.required],
      critereDeval2: ['', Validators.required],
      critereDeval3: ['', Validators.required],
      groupeDaction1: ['', Validators.required],
      groupeDaction2: ['', Validators.required],
      groupeDaction3: ['', Validators.required],
    });
    this.groupeCompetenceService.getGroupeComptences().subscribe(
      groupeCompetence => {
        this.groupeCompetences = groupeCompetence;
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    const $data = this.competenceForm.value;
    console.log($data);
    this.competenceService.createCompetence($data).subscribe(
      ok => {
        alert('OK');
        this.competenceForm.reset();
      }
    );
  }
}
