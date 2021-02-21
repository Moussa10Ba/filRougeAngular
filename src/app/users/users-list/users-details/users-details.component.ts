import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Service/user.service';
import {User} from '../../../Model/User';
import {Observable} from 'rxjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const idUser: number = +this.route.snapshot.params.id;
    this.userService.getUserById(idUser).subscribe(
      user => {
        this.user = user;
      },
    );
    this.route.params.subscribe(
      (p) => {
        // tslint:disable-next-line:no-shadowed-variable
        const idUser = +p.id;
        this.userService.getUserById(idUser).subscribe(
          user => {
            this.user = user;

          }
        );
      }
    );
  }
  // tslint:disable-next-line:typedef
  generatePdf() {
    // ...
   const dd = {
      content: [
        // ...
        {
          text: 'Carte Etudiant',
          style: 'header'
        },
        {
          text: 'Informations Relative',
          style: 'subheader'
        },/*
        {
          // you can also fit the image inside a rectangle
         /!* image: 'data:image/jpeg;base64,...encodedContent...',
          fit: [100, 100]*!/
        },*/
        {
         // text: 'tableExemple',
          style: 'tableExemple',

          table: {
            body: [
              ['Prenom:', `${this.user.prenom}`],
              ['Nom:', `${this.user.nom}`],
              ['Email:', `${this.user.email}`],
            ]
          },
        },
        {
          columns : [
            { qr: this.user.nom + ' ' + this.user.prenom + ' ' + this.user.prenom, fit : 100 },
            {
              text: ('Carte Etudiant'),
              alignment: 'right',
            }
          ]
        }
      ],
      styles: {
        // ...
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
      }
    };
   pdfMake.createPdf(dd).open();
  }



}
