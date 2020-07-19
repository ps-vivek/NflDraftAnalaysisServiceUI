import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PredraftGradeDetailsService } from './../../services/predraft-grade-details.service';
import { PaginatedPreDraftProspectDetails } from './../../services/predraft-grade-details.service';
@Component({
  selector: 'app-predraft-grade-details',
  templateUrl: './predraft-grade-details.component.html',
  styleUrls: ['./predraft-grade-details.component.css'],
})
export class PredraftGradeDetailsComponent implements OnInit {
  public isCollapsed = false;
  data: PaginatedPreDraftProspectDetails;
  defaultStealGrade = false;
  registerForm: FormGroup;
  submitted = false;
  years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];

  constructor(
    private preDraftGradeDetailsService: PredraftGradeDetailsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      year: ['', Validators.required],
    });

    this.preDraftGradeDetailsService
      .getPaginatedPreDraftProspectDetails(2014, 0, 10, 'player')
      .subscribe((response) => {
        console.log(response);
        this.data = response;
        console.log('Response obj:' + this.data.contents);
      });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(f) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let yearInput = this.registerForm.get('year').value;

    // display form values on success
    console.log(JSON.stringify(this.registerForm.value, null, 4));

    this.preDraftGradeDetailsService
      .getPaginatedPreDraftProspectDetails(yearInput, 0, 10, 'player')
      .subscribe((response) => {
        console.log(response);
        this.data = response;
        console.log('Response obj:' + this.data.contents);
      });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getPaginatedContents() {
    return this.data.contents;
  }
}
