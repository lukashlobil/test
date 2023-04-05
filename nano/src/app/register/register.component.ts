import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AuthClient} from '../../../api/src/lib/api.service';
import {HttpClient} from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'nano-login',
    standalone: true,
    imports: [CommonModule, FormsModule,ReactiveFormsModule, MatInputModule, MatButtonModule, MatSlideToggleModule, RouterLink],
    providers: [HttpClient],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(private regresService: AuthClient) {
    }

    public loginForm: FormGroup = new FormGroup({
            email: new FormControl('ahoj@kde.cz', [Validators.required, Validators.email]),
            password: new FormControl('asdasdasd', Validators.required),
            username: new FormControl('', Validators.required),
        }
    )

    public register() {
        this.regresService.register(this.loginForm.value).subscribe(res => {
            console.log(res);

        })
    }
}
