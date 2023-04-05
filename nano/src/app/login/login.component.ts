import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AuthClient} from '../../../api/src/lib/api.service';
import {HttpClient} from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Router, RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {PersistenceService} from '../../../api/src/lib/persistence.service';

@Component({
    selector: 'nano-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSlideToggleModule, RouterLink, MatCardModule],
    providers: [HttpClient],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginError = '';
    constructor(
        private regresService: AuthClient,
        private persistenceService: PersistenceService,
        private router: Router) {
    }

    public loginForm: FormGroup = new FormGroup({
            email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
            password: new FormControl('cityslicka', Validators.required),
        }
    )

    public login() {
        this.loginError = '';
        this.loginForm.markAllAsTouched();
        if (this.loginForm.valid) {
            this.loginForm.removeControl('username');
            this.regresService.login(this.loginForm.value).subscribe(res => {
                console.log(res);
                this.persistenceService.persistToken(res.token);
                this.router.navigate(['/list-users'])

            }, error => {
                this.loginError = error?.error?.error;
            })
        }

    }
}
