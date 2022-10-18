import { TestBed } from '@angular/core/testing';

import { NotificationsServiceService } from './notifications-service.service';

describe('NotificationsServiceService', () => {
  let service: NotificationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
