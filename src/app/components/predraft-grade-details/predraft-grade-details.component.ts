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
  registerForm: FormGroup;
  submitted = false;

  years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];

  defaultPageNumForPagination = 1;
  defaultPageSizeForPagination = 4;
  defaultSortField = 'player';
  totalElementPaginationConfig: { [key: number]: number } = {
    2014: 256,
    2015: 256,
    2016: 253,
    2017: 253,
    2018: 256,
    2019: 254,
    2020: 255,
  };
  config: any;

  data: PaginatedPreDraftProspectDetails;

  constructor(
    private preDraftGradeDetailsService: PredraftGradeDetailsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      year: ['', Validators.required],
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

    const yearInput = this.registerForm.get('year').value;
    console.log(this.totalElementPaginationConfig[yearInput]);

    this.preDraftGradeDetailsService
      .getPaginatedPreDraftProspectDetails(
        yearInput,
        this.defaultPageNumForPagination - 1,
        this.totalElementPaginationConfig[yearInput],
        this.defaultSortField
      )
      .subscribe((response) => {
        console.log(response);
        this.data = response;
        console.log('Response obj:' + this.data.contents);

        this.config = {
          itemsPerPage: this.defaultPageSizeForPagination,
          currentPage: this.defaultPageNumForPagination,
          totalItems: this.getPaginatedContents().length,
        };
      });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.data.contents = [];
  }

  getPaginatedContents() {
    return this.data.contents;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
