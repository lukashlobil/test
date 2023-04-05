import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {PersistenceService} from './persistence.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private persistenceService: PersistenceService,
    ) {
    }

    public canActivate(): boolean | UrlTree {
        if (!this.persistenceService.isLoggedin.getValue())
            return this.router.createUrlTree(['/login']);
        return true;
    }
}
