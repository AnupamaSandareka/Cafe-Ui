import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../shared/global-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  API_URL = GlobalConstants.url;

  constructor(
    private httpClient:HttpClient,

  ) { }

  generateReport(data:any){
    const  jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.post(this.API_URL+"/bill/generateReport", data, {headers} );
  }

  getPdf(data: any): Observable<Blob> {
    const jwtToken = localStorage.getItem('token');
  
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);
  
    return this.httpClient.post(this.API_URL + "/bill/getPdf", data, {
      responseType: 'blob',
      headers: headers
    });
  }

  getBills(){
    const  jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);

    return this.httpClient.get(this.API_URL+"/bill/getBills" , {headers})
  }

  delete(id:any){
    const  jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);

      return this.httpClient.post(`http://localhost:8081/bill/delete/${id}`, id, { headers }); }
}
