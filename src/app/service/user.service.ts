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
      {headers:new HttpHeaders().set('Content-Type','application/json')
    });
  }

  forgotPassword(data:any){
    return this.httpClient.post(this.API_URL+"/user/forgotPassword", data,
      {headers:new HttpHeaders().set('Content-Type','application/json')
    });
  }

  login(data:any){
    return this.httpClient.post(this.API_URL+"/user/login" , data, {
      headers : new HttpHeaders().set('Content-Type','application/json')
    });
  }

  checkToken(){
    return this.httpClient.get(this.API_URL+"/user/checkToken");
  }
}
