import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorDialogService } from './errors/error-dialog.service';
import { Injectable } from "@angular/core";
@Injectable()
export class ErrorIntercept implements HttpInterceptor {
  constructor(
    private errorDialogService: ErrorDialogService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Error from error interceptor", error);
        this.errorDialogService.openDialog(error.message ?? JSON.stringify(error), error.status);
        return throwError(error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
