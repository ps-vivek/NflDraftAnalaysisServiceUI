import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const avgGradeWithoutStealUrl = 'http://localhost:9595/draft/teamgrades/?';
const avgGradeWithStealUrl =
  'http://localhost:9595/draft/teamgradeswithsteal/?';
@Injectable({
  providedIn: 'root',
})
export class AverageGradeService {
  constructor(private http: HttpClient) {}

  getAverageGrade(teamName: String, year: String): Observable<any> {
    return this.http.get(
      avgGradeWithoutStealUrl + 'year=' + year + '&team=' + teamName
    );
  }

  getAverageWithStealGrade(teamName: String, year: String): Observable<any> {
    return this.http.get(
      avgGradeWithStealUrl + 'year=' + year + '&team=' + teamName
    );
  }
}
