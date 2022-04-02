import { TestBed } from '@angular/core/testing';

import { BankingServiceService } from './banking-service.service';

describe('BankingServiceService', () => {
  let service: BankingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
