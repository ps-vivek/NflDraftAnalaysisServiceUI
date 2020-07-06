import { TestBed } from '@angular/core/testing';

import { AverageGradeService } from './average-grade.service';

describe('AverageGradeService', () => {
  let service: AverageGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
