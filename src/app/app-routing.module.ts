import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AverageGradeComponent } from './components/average-grade/average-grade.component';
import { AverageGradeWithStealComponent } from './components/average-grade-with-steal/average-grade-with-steal.component';
import { DraftAnalysisHomeComponent } from './components/draft-analysis-home/draft-analysis-home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DraftAnalysisHomeComponent },
  { path: 'nfldraftanalysis', component: DraftAnalysisHomeComponent },
  {
    path: 'nfldraftanalysis/averagegrades',
    component: AverageGradeComponent,
  },
  {
    path: 'nfldraftanalysis/averagegradeswithsteal',
    component: AverageGradeWithStealComponent,
  },
  { path: 'nfldraftanalysis/about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
