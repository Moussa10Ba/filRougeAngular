import { Component, OnInit } from '@angular/core';
import {GroupecompetenceService} from '../../Service/groupecompetence.service';
import {GroupeCompetence} from '../../Model/GroupeCompetence';

@Component({
  selector: 'app-groupe-competence-list',
  templateUrl: './groupe-competence-list.component.html',
  styleUrls: ['./groupe-competence-list.component.css']
})
export class GroupeCompetenceListComponent implements OnInit {

  groupeCompetences: GroupeCompetence[] = [];

  constructor(private groupeCompetenceServive: GroupecompetenceService,
              ) { }

  ngOnInit(): void {
    this.groupeCompetenceServive.getGroupeComptences().subscribe(
      groupeCompetence => {
        this.groupeCompetences = groupeCompetence;
        console.log(groupeCompetence);
      }
    );
  }
  // tslint:disable-next-line:typedef
  view(){
    console.log(this.groupeCompetences);
  }

  // tslint:disable-next-line:typedef
  OnDelete(id: number){
    this.groupeCompetenceServive.deleteGroupeCompetence(id).subscribe(
      ok => {
        alert('Deleted');
        this.groupeCompetenceServive.getGroupeComptences().subscribe(
          groupeCompetence => {
            this.groupeCompetences = groupeCompetence;
            console.log(groupeCompetence);
          }
        );
      }
    );
  }

}
