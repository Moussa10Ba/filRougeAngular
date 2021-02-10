import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortieListComponent } from './profil-sortie-list.component';

describe('ProfilSortieListComponent', () => {
  let component: ProfilSortieListComponent;
  let fixture: ComponentFixture<ProfilSortieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
