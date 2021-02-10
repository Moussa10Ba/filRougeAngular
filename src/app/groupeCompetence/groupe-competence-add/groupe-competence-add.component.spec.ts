import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeCompetenceAddComponent } from './groupe-competence-add.component';

describe('GroupeCompetenceAddComponent', () => {
  let component: GroupeCompetenceAddComponent;
  let fixture: ComponentFixture<GroupeCompetenceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeCompetenceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeCompetenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
