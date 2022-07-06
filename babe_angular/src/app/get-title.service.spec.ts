import { TestBed } from '@angular/core/testing';

import { GetTitleService } from './get-title.service';

describe('GetTitleService', () => {
  let service: GetTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
