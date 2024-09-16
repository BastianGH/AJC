import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../../type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) {}

  async login(cred: Credentials) {
    // post(URL, corps de la requète)
    return await this.http.post(this.apiUrl, cred);
  }
}
