import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListUsersComponent} from './list-users/list-users.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'list-users',
        component: ListUsersComponent
    },
    {
        path: 'list-users/{id}',
        component: ListUsersComponent
    }
];
