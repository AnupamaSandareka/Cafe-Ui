import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = "http://localhost:8081";

  constructor(
    private httpClient : HttpClient
  ) { }

  add(data : any){
    return this.httpClient.post(this.API_URL + "/category/add", data, {
      headers : new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  update(data : any){
    return this.httpClient.post(this.API_URL + "/category/updateCategory", data, {
      headers : new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getAllCategory(data : any){
    return this.httpClient.post(this.API_URL + "/category/getAllCategory", data, {
      headers : new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
