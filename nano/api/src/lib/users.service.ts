import {HttpClient, HttpParams} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {ListUsersParams, PaginationResponse, User, UserDetail, UserResponse} from '../../../models/src/lib/users';

@Injectable({providedIn: 'root'})
export class UsersClient {
  private readonly serviceUrl;

  constructor(private http: HttpClient) {
    this.serviceUrl = `https://reqres.in/api`;
  }

  public listUsers(userParams?: ListUsersParams): Observable<PaginationResponse> {
    let params = new HttpParams();
    if (userParams) {
      if (userParams.page) params = params.append('page', userParams.page);
      if (userParams.per_page) params = params.append('per_page', userParams.per_page);
    }
    console.log(params)
    return this.http.get<PaginationResponse>(`${ this.serviceUrl }/users`, {params});
  }



  public getUser(id: number): Observable<UserDetail> {
  return this.http.get<UserResponse>(`${ this.serviceUrl }/user/${id}`).pipe(map(response => response.data))
  }

}
