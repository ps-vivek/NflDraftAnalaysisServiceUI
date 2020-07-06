import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageGradeWithStealComponent } from './average-grade-with-steal.component';

describe('AverageGradeWithStealComponent', () => {
  let component: AverageGradeWithStealComponent;
  let fixture: ComponentFixture<AverageGradeWithStealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageGradeWithStealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageGradeWithStealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
