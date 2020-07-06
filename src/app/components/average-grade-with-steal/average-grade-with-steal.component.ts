import { Component, OnInit } from '@angular/core';
import { AverageGradeService } from './../../services/average-grade.service';
@Component({
  selector: 'app-average-grade-with-steal',
  templateUrl: './average-grade-with-steal.component.html',
  styleUrls: ['./average-grade-with-steal.component.css'],
})
export class AverageGradeWithStealComponent implements OnInit {
  data: any = [];
  years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
  public isCollapsed = false;
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

  constructor(private averageGradeService: AverageGradeService) {}

  ngOnInit(): void {}

  submit(f) {
    this.averageGradeService
      .getAverageWithStealGrade(
        f.controls['teamName'].value as string,
        f.controls['year'].value as string
      )
      .subscribe((response) => {
        this.data = response;
      });
  }
}
