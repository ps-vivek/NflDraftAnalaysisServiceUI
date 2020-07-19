import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PreDraftProspectDetails {
  player: String;
  college: String;
  status: String;
  position: String;
  team: String;
  collegeClass: String;
  grade: number;
  conference: String;
  year: number;
}

export interface PaginatedPreDraftProspectDetails {
  contents: PreDraftProspectDetails[];
  totalElements: number;
  noOfElements: number;
  pageNumber: number;
  pageSize: number;
}

const fetchPaginatedProspectDetailsUrl =
  'http://localhost:9595/draft/prospectgrades/?';
@Injectable({
  providedIn: 'root',
})
export class PredraftGradeDetailsService {
  constructor(private http: HttpClient) {}

  getPaginatedPreDraftProspectDetails(
    year: number,
    pageNumber: number,
    pageSize: number,
    sortField: String
  ): Observable<PaginatedPreDraftProspectDetails> {
    return this.http.get<PaginatedPreDraftProspectDetails>(
      fetchPaginatedProspectDetailsUrl +
        'year=' +
        year +
        '&pagenum=' +
        pageNumber +
        '&size=' +
        pageSize +
        '&sortField=' +
        sortField
    );
  }
}
