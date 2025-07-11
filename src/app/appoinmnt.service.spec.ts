import { TestBed } from '@angular/core/testing';

import { AppoinmntService } from './appoinmnt.service';

describe('AppoinmntService', () => {
  let service: AppoinmntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoinmntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
