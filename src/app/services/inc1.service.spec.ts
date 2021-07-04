import { TestBed } from '@angular/core/testing';

import { Inc1Service } from './inc1.service';

describe('Inc1Service', () => {
  let service: Inc1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inc1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
