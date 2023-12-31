import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = GlobalConstants.url;

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

  changePassword(data : any) {

    // Assuming you have a function to get the JWT token from where it is stored
  const jwtToken = localStorage.getItem('token');

  // Include the JWT token in the Authorization header
  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL+"/user/changePassword", data, {headers});
  }

  getUser(){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.get(this.API_URL+"/user/get", {headers})
  }

  update(data:any){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL+"/user/update", data, {headers})
  }

}
