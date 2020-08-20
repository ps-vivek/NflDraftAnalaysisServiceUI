import { Component, OnInit } from '@angular/core';
import {
  AverageGradeService,
  AverageProspectGradeInfo,
} from './../../services/average-grade.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-average-grade',
  templateUrl: './average-grade.component.html',
  styleUrls: ['./average-grade.component.css'],
})
export class AverageGradeComponent implements OnInit {
  public isCollapsed = false;
  data: AverageProspectGradeInfo[] = [];
  defaultStealGrade = false;
  registerForm: FormGroup;
  submitted = false;
  years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
  teams = [
    'Arizona Cardinals',
    'Atlanta Falcons',
    'Baltimore Ravens',
    'Buffalo Bills',
    'Carolina Panthers',
    'Chicago Bears',
    'Cincinnati Bengals',
    'Cleveland Browns',
    'Dallas Cowboys',
    'Denver Broncos',
    'Detroit Lions',
    'Green Bay Packers',
    'Houston Texans',
    'Indianapolis Colts',
    'Jacksonville Jaguars',
    'Kansas City Chiefs',
    'Los Angeles Chargers',
    'San Diego Chargers',
    'Los Angeles Rams',
    'St. Louis Rams',
    'Las Vegas Raiders',
    'Miami Dolphins',
    'Minnesota Vikings',
    'New England Patriots',
    'New Orleans Saints',
    'New York Giants',
    'New York Jets',
    'Oakland Raiders',
    'Philadelphia Eagles',
    'Pittsburgh Steelers',
    'San Francisco 49ers',
    'Seattle Seahawks',
    'Tampa Bay Buccaneers',
    'Tennessee Titans',
    'Washington Redskins',
  ];

  constructor(
    private averageGradeService: AverageGradeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      year: ['', Validators.required],
      team: ['', Validators.required],
      stealGrade: [''],
    });

    this.averageGradeService
      .getAverageGrade('all', '2014', false)
      .subscribe((response) => {
        console.log(response);
        this.data = response;
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

    this.data = [];

    const stealGradeInput =
      this.registerForm.get('stealGrade').value === '' ||
      this.registerForm.get('stealGrade').value === null
        ? this.defaultStealGrade
        : this.registerForm.get('stealGrade').value;
    const teamNameInput = this.registerForm.get('team').value;
    const yearInput = this.registerForm.get('year').value;

    this.averageGradeService
      .getAverageGrade(teamNameInput, yearInput, stealGradeInput as boolean)
      .subscribe((response) => {
        console.log(response);
        this.data = response;
      });

    // display form values on success
    console.log(JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.data = [];
  }
}
