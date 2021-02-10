import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeCompetenceListComponent } from './groupe-competence-list.component';

describe('GroupeCompetenceListComponent', () => {
  let component: GroupeCompetenceListComponent;
  let fixture: ComponentFixture<GroupeCompetenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeCompetenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeCompetenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
