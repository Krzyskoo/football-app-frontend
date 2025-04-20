import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/login-response';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = 'http://localhost:8080/login'; // zmień jak potrzeba
  loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {
    const token = this.getToken();
    this.loggedIn.next(!!token);
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authUrl, { username, password }).pipe(
      tap((res: LoginResponse) => {
        localStorage.setItem('jwtToken', res.jwtToken);
        this.loggedIn.next(true); // oznacz jako zalogowany
      })
    );
  }
  register(email:string, password:string):Observable<string>{
    return this.http.post<string>('http://localhost:8080/register',{
      email,
      password
    })
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.loggedIn.next(false); // Ustawienie statusu zalogowania
  }
}
