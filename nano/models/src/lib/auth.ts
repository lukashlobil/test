export interface LoginParams {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface AuthErrorResponse {
    error: string;
}

export interface RegisterParams extends LoginParams {
    username: string;
}

export interface RegisterResponse extends LoginResponse {
    id: number;
}
