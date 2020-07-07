import { Component, OnInit } from '@angular/core';
import { AverageGradeService } from './../../services/average-grade.service';
import { AverageProspectGradeInfo } from './../../average-prospect-grade-info';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-average-grade',
  templateUrl: './average-grade.component.html',
  styleUrls: ['./average-grade.component.css'],
})
export class AverageGradeComponent implements OnInit {
  public isCollapsed = false;
  prospectInfo: AverageProspectGradeInfo[] = [];
  data: any = [];
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
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit(f) {
    this.route.navigate(['./'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        year: f.controls['year'].value as string,
        teamname: f.controls['teamName'].value as string,
      },
    });

    this.averageGradeService
      .getAverageGrade(
        f.controls['teamName'].value as string,
        f.controls['year'].value as string
      )
      .subscribe((response) => {
        this.data = response;
      });
  }
}
