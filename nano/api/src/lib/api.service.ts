import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginParams,
  LoginResponse,
  RegisterParams,
  RegisterResponse
} from '../../../models/src/lib/auth';

@Injectable({providedIn: 'root'})
export class AuthClient {
  private readonly serviceUrl;

  constructor(private http: HttpClient) {
    this.serviceUrl = `https://reqres.in/api`;
  }

  public login(params: LoginParams): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${ this.serviceUrl }/login`, params);
  }

  public register(params: RegisterParams): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${ this.serviceUrl }/register`, params);
  }

/*
  public getSingleUser(): Observable<User>
  return this.http.get<User>(`${ this.serviceUrl }/`)
  }
*/

}
