import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URL = "http://localhost:8081";

  constructor(
    private httpClient : HttpClient,
    private authService : AuthService
  ) { }

  getDetails() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    });

    return this.httpClient.get<Map<string, number>>(this.API_URL + '/dashboard/details', {headers});
  }
}
