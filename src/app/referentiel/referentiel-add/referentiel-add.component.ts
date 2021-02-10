import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetencesService} from '../../Service/competences.service';
import {Competence} from '../../Model/Competence';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {ReferentielService} from '../../Service/referentiel.service';

@Component({
  selector: 'app-referentiel-add',
  templateUrl: './referentiel-add.component.html',
  styleUrls: ['./referentiel-add.component.css']
})
export class ReferentielAddComponent implements OnInit {
  competences: any;
  programme: any;
  dropdownList = [];
  selectedItems: any;
  dropdownSettings: IDropdownSettings;
  referentielForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private competenceService: CompetencesService,
              private referentielService: ReferentielService
              ) { }

  ngOnInit(): void {
    this.competenceService.getComptences().subscribe(
      competence => {
        this.competences = competence;
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
      competences: ['', Validators.required],
      programme: ['', Validators.required],
      critereDeval: ['', Validators.required],
      critereDad: ['', Validators.required],
    });
      }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const data = this.referentielForm.value;
    const referentiel = new FormData();
    referentiel.append('libelle', data.libelle);
    referentiel.append('presentation', data.presentation);
    referentiel.append('competences', data.competences);
    referentiel.append('critereDeva', data.critereDeval);
    referentiel.append('critereDad', data.critereDad);
    referentiel.append('critereDad', data.critereDad);
    referentiel.append('programme', this.programme);
    this.referentielService.addReferentiel(data).subscribe(
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
