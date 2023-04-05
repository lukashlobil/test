import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {PersistenceService} from './persistence.service';
import {catchError, Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService,
              private router: Router
  ) {}
  intercept(request: HttpRequest<void>, next: HttpHandler): Observable<HttpEvent<void>> {
    const token = this.persistenceService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {Authorization: `Authorization token ${token}`}
      });
    }

    return next.handle(request).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login']);
            }
          }
          return throwError(err);
        })
    )
  }
}
