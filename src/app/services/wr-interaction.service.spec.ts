import { TestBed } from '@angular/core/testing';

import { WrInteractionService } from './wr-interaction.service';

describe('WrInteractionService', () => {
  let service: WrInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
