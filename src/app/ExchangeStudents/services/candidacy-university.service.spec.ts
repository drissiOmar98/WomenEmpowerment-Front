import { TestBed } from '@angular/core/testing';

import { CandidacyUniversityService } from './candidacy-university.service';

describe('CandidacyUniversityService', () => {
  let service: CandidacyUniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidacyUniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
