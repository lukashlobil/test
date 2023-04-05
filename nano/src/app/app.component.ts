import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'nano-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'nano';
}
