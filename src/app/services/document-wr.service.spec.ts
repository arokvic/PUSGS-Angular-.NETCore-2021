import { TestBed } from '@angular/core/testing';

import { DocumentWrService } from './document-wr.service';

describe('DocumentWrService', () => {
  let service: DocumentWrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentWrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
