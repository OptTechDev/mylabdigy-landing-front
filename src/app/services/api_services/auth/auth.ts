import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../enviroment/enviroment';
import { User, AuthResponse } from '../../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseLoginUrl = `${environment.apiUrl}api/v1/auth`;

  currentUser = signal<User | null>(null);

  login(credentials: Partial<User>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseLoginUrl}/login`, credentials).pipe(
      tap(response => {
        this.currentUser.set(response.user);
        localStorage.setItem('auth_token', response.token);
      })
    );
  }
}