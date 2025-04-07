import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/login-response';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = 'http://localhost:8080/login'; // zmień jak potrzeba

  constructor(private http: HttpClient) {}

  login(username: string, password: string):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authUrl,{
      username,
      password
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
