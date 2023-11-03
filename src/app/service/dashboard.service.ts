import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URL = "http://localhost:8081";

  constructor(
    private httpClient : HttpClient
  ) { }

  getDetails(){
    this.httpClient.get(this.API_URL+'/dashboard/details');
  }
}
