import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/api-response';
import { User } from '../Model/user';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost/myforum/';

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', user);
  }

  getUser(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
  }
}
