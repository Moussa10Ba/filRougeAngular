import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Competence} from '../../Model/Competence';
import {CompetencesService} from '../../Service/competences.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupecompetenceService} from '../../Service/groupecompetence.service';


@Component({
  selector: 'app-groupe-competence-add',
  templateUrl: './groupe-competence-add.component.html',
  styleUrls: ['./groupe-competence-add.component.css']
})
export class GroupeCompetenceAddComponent implements OnInit{
  competences: any;
  dropdownList = [];
  selectedItems: any;
  dropdownSettings: IDropdownSettings;
  groupeCompetenceForm: FormGroup;
  constructor(private competenceService: CompetencesService,
              private formBuilder: FormBuilder,
              private groupeCompetenceService: GroupecompetenceService
              ) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
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
    this.groupeCompetenceForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      descriptif: ['' , Validators.required],
      competences: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }
  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const data = this.groupeCompetenceForm.value;
    this.groupeCompetenceService.addGroupeCompetence(data).subscribe(
      ok => {
        console.log('saved');
      }
    );
    this.groupeCompetenceForm.reset();
  }
}
