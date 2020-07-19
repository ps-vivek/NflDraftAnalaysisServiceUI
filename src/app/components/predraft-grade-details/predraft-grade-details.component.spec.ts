import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredraftGradeDetailsComponent } from './predraft-grade-details.component';

describe('PredraftGradeDetailsComponent', () => {
  let component: PredraftGradeDetailsComponent;
  let fixture: ComponentFixture<PredraftGradeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredraftGradeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredraftGradeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
