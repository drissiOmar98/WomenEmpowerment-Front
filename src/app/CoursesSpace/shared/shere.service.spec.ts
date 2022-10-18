import { TestBed } from '@angular/core/testing';

import { ShereService } from './shere.service';

describe('ShereService', () => {
  let service: ShereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
