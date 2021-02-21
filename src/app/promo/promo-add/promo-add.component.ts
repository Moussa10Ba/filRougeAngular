import { Component, OnInit } from '@angular/core';
import {ReferentielService} from '../../Service/referentiel.service';
import {Referentiel} from '../../Model/Referentiel';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupecompetenceService} from '../../Service/groupecompetence.service';
import {MenuItem} from 'primeng/api';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {promises} from 'fs';
import {PromoService} from '../../Service/promo.service';
@Component({
  selector: 'app-promo-add',
  templateUrl: './promo-add.component.html',
  styleUrls: ['./promo-add.component.css']
})
export class PromoAddComponent implements OnInit {
  private fileToUpload: any;
  private imageUrl: any;
  constructor(private formBuilder: FormBuilder,
              private referentielService: ReferentielService,
              private formbuilder: FormBuilder,
              private promoService: PromoService
  ) { }
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  referentiels: any;
  avatar: any;
  excelFile: any;
  dropdownList = [];
  selectedItems: any;
  value: string[];
  dropdownSettings: IDropdownSettings;
  referentielForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: any[] = [
  ];
  promoForm: FormGroup;
  ngOnInit(): void {
    this.referentielService.getReferentiel().subscribe(
      referentiel => {
        this.referentiels = referentiel;
      }
    );
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 7,
      allowSearchFilter: true
    };

    this.promoForm =  this.formBuilder.group({
     langue: ['', Validators.required],
     description: ['', Validators.required],
     lieu: ['', Validators.required],
     fabrique: ['', Validators.required],
     avatar: ['', Validators.required],
     titre: ['', Validators.required],
      excelFile: ['', Validators.required],
      referenceAgate: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      referentiels: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const attrs = ['langue', 'description', 'lieu', 'fabrique', 'avatar', 'titre', 'referenceAgate', 'dateDebut',
      'dateFin', 'referentiels'];
    const data = this.promoForm.value;
    const promo = new FormData();
    (data.referentiels).forEach(
      rf => {
        promo.append('referentiels[]', '/api/admin/referentiels/' + rf.id);
      }
    );
    promo.append('langue', data.langue);
    promo.append('description', data.description);
    promo.append('lieu', data.lieu);
    promo.append('fabrique', data.fabrique);
    promo.append('titre', data.titre);
    promo.append('referenceAgate', data.referenceAgate);
    promo.append('dateDebut', data.dateDebut);
    promo.append('dateFin', data.dateFin);
    promo.append('excelFile', this.excelFile);
    promo.append('avatar', this.avatar);
    console.log(promo.get('excelFile'));
    this.promoService.addPromo(promo).subscribe(
      ok => {
         alert('Added');
         this.promoForm.reset();
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
    this.avatar = event.target.files[0];
  }
  onFileSelectExcel(event): any {
    this.excelFile = event.target.files[0];
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  // tslint:disable-next-line:typedef
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}


