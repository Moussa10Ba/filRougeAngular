import { Component, OnInit } from '@angular/core';
import {ReferentielService} from '../../Service/referentiel.service';
import {Referentiel} from '../../Model/Referentiel';
import {HttpClient} from '@angular/common/http';
import {SafeUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-referentiel-list',
  templateUrl: './referentiel-list.component.html',
  styleUrls: ['./referentiel-list.component.css']
})
export class ReferentielListComponent implements OnInit {

  referentiels: Referentiel[] = [];
  pdfSource = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor(private referentielService: ReferentielService,
              private sanitizer: DomSanitizer
              ) { }

  ngOnInit(): void {
    this.referentielService.getReferentiel().subscribe(
      referentiel => {
        this.referentiels = referentiel;
        console.log('On est la');
        console.log(referentiel);
      }
    );
  }
  // tslint:disable-next-line:typedef
  OnDelete(id: number){
    this.referentielService.deleteReferentiel(id).subscribe(
      ok => {
        alert('Supprimer Avec Succes');
        this.referentielService.getReferentiel().subscribe(
          referentiel => {
            this.referentiels = referentiel;
          }
        );
      }
    );
}
  // tslint:disable-next-line:typedef
  getPdf(programme){
    const byteArray = new Uint8Array(atob(programme).split('').map(char => char.charCodeAt(0)));
    const blob = new Blob([byteArray], {type: 'application/pdf'});
    if (blob){
      const url = window.URL.createObjectURL(blob);
      if (url !== null){
        // document.querySelector('iframe' + this.index).src = url;
        return this.sanitizer.bypassSecurityTrustResourceUrl (url);
       // return url;

      }
    }
    return null;
  }

}
