import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetencesService} from '../../Service/competences.service';
import {Competence} from '../../Model/Competence';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {ReferentielService} from '../../Service/referentiel.service';
import {GroupecompetenceService} from '../../Service/groupecompetence.service';

@Component({
  selector: 'app-referentiel-add',
  templateUrl: './referentiel-add.component.html',
  styleUrls: ['./referentiel-add.component.css']
})
export class ReferentielAddComponent implements OnInit {
  groupeCompetences: any;
  programme: any;
  dropdownList = [];
  selectedItems: any;
  dropdownSettings: IDropdownSettings;
  referentielForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private groupeCompetenceService: GroupecompetenceService,
              private referentielService: ReferentielService
              ) { }

  ngOnInit(): void {
    this.groupeCompetenceService.getGroupeComptences().subscribe(
      groupeCompetence => {
        this.groupeCompetences = groupeCompetence;
      }
    );
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

    this.referentielForm =  this.formBuilder.group({
      libelle: ['', Validators.required],
      presentation: ['', Validators.required],
      groupeCompetence: ['', Validators.required],
      programme: ['', Validators.required],
      critereDev: ['', Validators.required],
      critereDad: ['', Validators.required],
    });
      }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const data = this.referentielForm.value;
    const referentiel = new FormData();
    (data.groupeCompetence).forEach(
      gC => {
        referentiel.append('groupeCompetence[]', '/api/admin/groupe_competences/' + gC.id);
      }
    );
    referentiel.append('libelle', data.libelle);
    referentiel.append('presentation', data.presentation);
    referentiel.append('critereDev', data.critereDev);
    referentiel.append('critereDad', data.critereDad);
    referentiel.append('programme', this.programme);
    this.referentielService.addReferentiel(referentiel).subscribe(
      ok => {
        alert('ok');
      }
    );
  }
  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }
  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }

   onFileSelect(event): any {
    this.programme = event.target.files[0];
    console.log(this.programme);
   }
}
