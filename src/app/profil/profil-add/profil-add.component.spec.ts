import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAddComponent } from './profil-add.component';

describe('ProfilAddComponent', () => {
  let component: ProfilAddComponent;
  let fixture: ComponentFixture<ProfilAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
