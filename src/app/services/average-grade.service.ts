import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const avgGradeWithoutStealUrl = 'http://localhost:9595/draft/teamgrades/?';

export interface AverageProspectGradeInfo {
  noOfPlayersDrafted: number;
  teamName: string;
  averageGrade: number;
  playersDrafted: number;
}

@Injectable({
  providedIn: 'root',
})
export class AverageGradeService {
  constructor(private http: HttpClient) {}

  getAverageGrade(
    teamName: String,
    year: String,
    isStealGrade: boolean
  ): Observable<AverageProspectGradeInfo[]> {
    return this.http.get<AverageProspectGradeInfo[]>(
      avgGradeWithoutStealUrl +
        'year=' +
        year +
        '&team=' +
        teamName +
        '&stealgrade=' +
        isStealGrade
    );
  }
}
