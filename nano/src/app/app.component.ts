import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {PersistenceService} from '../../api/src/lib/persistence.service';
import {CommonModule} from '@angular/common';

@Component({
    standalone: true,
    imports: [RouterModule, CommonModule],
    selector: 'nano-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'nano';
    loggedIn = false;

    constructor(private persistenceService: PersistenceService,
                private router: Router) {
    }

    ngOnInit() {
        this.persistenceService.isLoggedin.subscribe(res => {
            this.loggedIn = res
        });
        if (this.persistenceService.getToken()) this.loggedIn = true;
        this.persistenceService.isLoggedin.next(true);
    }

    logout() {
        this.persistenceService.removeToken();
        this.router.navigate(['/login']);
        this.loggedIn = false;
    }
}
