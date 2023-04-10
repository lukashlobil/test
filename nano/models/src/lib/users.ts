import {FormControl} from '@angular/forms';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserDetail {
    color: string;
    id: number;
    name: string;
    pantone_value: string;
    year: 2000;
}

export interface UserResponse {
    data: UserDetail
}

export interface PaginationResponse {
    page: number;
    total: number;
    total_pages: number;
    data: User[];
    per_page: number;
}

export interface ListUsersParams {
    page?: number;
    per_page?: number;
}

export interface PaginationFormModel {
    page: FormControl<number>;
    per_page: FormControl<number>;
}
