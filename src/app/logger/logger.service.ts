import {Inject, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IConfig, LOGGER_MESSAGE} from './token';

@Injectable()
export class HttpLoggerService implements HttpInterceptor {

  constructor(@Inject(LOGGER_MESSAGE) private config: IConfig) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      retry(1),
      catchError(
        (err: HttpErrorResponse) => {

          if (!this.config.production) {
            console.log(err);
            this.saveToLocalStroage(err);
          }
          return throwError(err);
        })
    );
  }

  saveToLocalStroage(err: HttpErrorResponse) {
    localStorage.setItem(err.url, err.message);
  }
}

