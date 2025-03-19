import { TestBed } from '@angular/core/testing';

import { GetTop10Service } from './get-top10.service';

describe('GetTop10Service', () => {
  let service: GetTop10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTop10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
