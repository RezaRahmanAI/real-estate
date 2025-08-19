import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';

export interface LoginResponse {
  token: string;
  expiration: string;
  id: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.baseUrl; // from environment config
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  token$ = this.tokenSubject.asObservable();
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.tokenSubject.next(token);
      this.loggedInSubject.next(true);
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/api/authentication/login`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('tokenExpiration', res.expiration);
          localStorage.setItem('userId', res.id);
          localStorage.setItem('email', res.email);
          this.tokenSubject.next(res.token);
          this.loggedInSubject.next(true);
        })
      );
  }

  logout() {
    localStorage.clear();
    this.tokenSubject.next(null);
    this.loggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}
