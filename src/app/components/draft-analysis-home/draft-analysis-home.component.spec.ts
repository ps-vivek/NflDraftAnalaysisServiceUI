import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftAnalysisHomeComponent } from './draft-analysis-home.component';

describe('DraftAnalysisHomeComponent', () => {
  let component: DraftAnalysisHomeComponent;
  let fixture: ComponentFixture<DraftAnalysisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftAnalysisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftAnalysisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
