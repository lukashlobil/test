import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersistenceService {
    public isLoggedin = new BehaviorSubject(false);
    public persistToken(token: string) {
        localStorage.setItem('token', token);
        this.isLoggedin.next(true);
    }

    public getToken(): string | null {
        return localStorage.getItem('token');
    }

    public removeToken() {
        localStorage.removeItem('token');
        this.isLoggedin.next(false);
    }

}
