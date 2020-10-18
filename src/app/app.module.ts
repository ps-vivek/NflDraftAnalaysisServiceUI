import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AverageGradeComponent } from './components/average-grade/average-grade.component';
import { DraftAnalysisHomeComponent } from './components/draft-analysis-home/draft-analysis-home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PredraftGradeDetailsComponent } from './components/predraft-grade-details/predraft-grade-details.component';
import { ErrorIntercept } from './services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ErrorDialogService } from './services/errors/error-dialog.service';
@NgModule({
  declarations: [
    AppComponent,
    AverageGradeComponent,
    DraftAnalysisHomeComponent,
    AboutComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    PredraftGradeDetailsComponent,
    ErrorDialogComponent,
  ],
  imports: [
  
  BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true,
    },
    {
      provide: MatDialogRef,
      useValue:{ appearance: "fill" }
    },ErrorDialogService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
