import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AverageGradeComponent } from './components/average-grade/average-grade.component';
import { AverageGradeWithStealComponent } from './components/average-grade-with-steal/average-grade-with-steal.component';
import { DraftAnalysisHomeComponent } from './components/draft-analysis-home/draft-analysis-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AverageGradeComponent,
    AverageGradeWithStealComponent,
    DraftAnalysisHomeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
