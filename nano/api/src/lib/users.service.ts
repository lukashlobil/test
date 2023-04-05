import {HttpClient, HttpParams} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListUsersParams, PaginationResponse, User} from '../../../models/src/lib/users';

@Injectable({providedIn: 'root'})
export class UsersClient {
  private readonly serviceUrl;

  constructor(private http: HttpClient) {
    this.serviceUrl = `https://reqres.in/api`;
  }

  public listUsers(userParams?: ListUsersParams): Observable<any> {
    let params = new HttpParams();
/*    for (let paramsKey in userParams) {
      params.append(paramsKey.toString(), userParams[paramsKey]);
    }*/
    console.log(userParams)
    if (userParams) {
      if (userParams.page) params = params.append('page', userParams.page);
      if (userParams.per_page) params = params.append('per_page', userParams.per_page);
    }
    console.log(params)
    return this.http.get<PaginationResponse>(`${ this.serviceUrl }/users`, {params});
  }

/*
  public getSingleUser(): Observable<User>
  return this.http.get<User>(`${ this.serviceUrl }/`)
  }
*/

}
