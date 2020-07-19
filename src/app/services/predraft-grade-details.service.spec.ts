import { TestBed } from '@angular/core/testing';

import { PredraftGradeDetailsService } from './predraft-grade-details.service';

describe('PredraftGradeDetailsService', () => {
  let service: PredraftGradeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredraftGradeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
