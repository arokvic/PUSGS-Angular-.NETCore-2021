import { TestBed } from '@angular/core/testing';

import { SafetyDocumentsService } from './safety-documents.service';

describe('SafetyDocumentsService', () => {
  let service: SafetyDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafetyDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
