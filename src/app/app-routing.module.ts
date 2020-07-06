import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AverageGradeComponent } from './components/average-grade/average-grade.component';
import { AverageGradeWithStealComponent } from './components/average-grade-with-steal/average-grade-with-steal.component';
import { DraftAnalysisHomeComponent } from './components/draft-analysis-home/draft-analysis-home.component';
const routes: Routes = [
  { path: '', component: DraftAnalysisHomeComponent },
  { path: 'nfldraftanalysis', component: DraftAnalysisHomeComponent },
  { path: 'nfldraftanalysis/averagegrades', component: AverageGradeComponent },
  {
    path: 'nfldraftanalysis/averagegradeswithsteal',
    component: AverageGradeWithStealComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
