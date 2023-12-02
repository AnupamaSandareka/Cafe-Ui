import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = GlobalConstants.url;

  constructor(
    private httpClient : HttpClient
  ) { }

  add(data:any){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL+'/product/addNewProduct' , data , {headers});
  }

  update(data:any){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL+'/product/updateProduct' , data , {headers});
  }

  getProducts(){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.get(this.API_URL+'/product/getAllProduct' , {headers});
  }

  updateStatus(data:any){
    const jwtToken = localStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL+'/product/updateStatus' , data , {headers});
  }

  delete(id: any) {
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);
  
    return this.httpClient.delete(`http://localhost:8081/product/deleteProductById/${id}`, { headers });
  }

  getProductByCategory(id:any){
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.get(this.API_URL+"/product/getByCategory/"+id , {headers});
  }

  getById(id:any){
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.get(this.API_URL+"/product/getProductById/"+id, {headers});
  }
}
