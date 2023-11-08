import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router : Router
  ) { }


  public isAuthenticated() : boolean {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/']);
      return false;
    }
    else{
      return true;
    }
  }

  public isLoggedIn() : boolean {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
  
    return role !== null && token !== null;
  }

  public clear(){
    localStorage.clear();
  }

}