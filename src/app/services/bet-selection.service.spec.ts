import { TestBed } from '@angular/core/testing';

import { BetSelectionService } from './bet-selection.service';

describe('BetSelectionService', () => {
  let service: BetSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
