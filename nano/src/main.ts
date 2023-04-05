import {bootstrapApplication} from '@angular/platform-browser';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
} from '@angular/router';
import {appRoutes} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {importProvidersFrom} from '@angular/core';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {AuthInterceptorService} from '../api/src/lib/auth.interceptor';
import {PersistenceService} from '../api/src/lib/persistence.service';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
        importProvidersFrom(BrowserAnimationsModule),
        provideHttpClient(),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        PersistenceService
    ],
}).catch((err) => console.error(err));
