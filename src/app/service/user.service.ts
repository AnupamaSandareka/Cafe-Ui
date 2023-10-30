import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = "http://localhost:8081";

  constructor(private httpClient:HttpClient) { }

  signup(data:any){
    return this.httpClient.post(this.API_URL+"/user/signup", data,
      {headers:new HttpHeaders().set('Contet-Type','application/json')});
  }
}
