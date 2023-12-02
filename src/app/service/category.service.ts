import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = GlobalConstants.url;

  constructor(
    private httpClient : HttpClient
  ) { }

  add(data : any){

    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL + "/category/add", data, {headers})
  }

  update(data : any){

    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL + "/category/updateCategory", data, {headers})
  }

  getAllCategory(){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);
    
    return this.httpClient.get(this.API_URL + "/category/getAllCategory", {headers});
  }

  getFilteredCategorys(){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.get(this.API_URL+"/category/getAllCategory?FilterValue=true", {headers});
  }
}
