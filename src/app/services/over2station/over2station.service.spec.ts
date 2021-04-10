import { TestBed } from '@angular/core/testing';

import { Over2stationService } from './over2station.service';

describe('Over2stationService', () => {
  let service: Over2stationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Over2stationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
