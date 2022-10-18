import { TestBed } from '@angular/core/testing';

import { StatistiqueServiceService } from './statistique-service.service';

describe('StatistiqueServiceService', () => {
  let service: StatistiqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
