import { TestBed } from '@angular/core/testing';

import { RatingUniversityService } from './rating-university.service';

describe('RatingUniversityService', () => {
  let service: RatingUniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingUniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
