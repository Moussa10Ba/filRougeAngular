import { TestBed } from '@angular/core/testing';

import { GroupecompetenceService } from './groupecompetence.service';

describe('GroupecompetenceService', () => {
  let service: GroupecompetenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupecompetenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
