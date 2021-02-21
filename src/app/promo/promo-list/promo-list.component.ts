import { Component, OnInit } from '@angular/core';
import {PromoService} from '../../Service/promo.service';
import {Promo} from '../../Model/Promo';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {
promos: Promo[] = [];
  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.promoService.getPromo().subscribe(
      promo => {
          this.promos = promo;
      }
    );
  }

}
