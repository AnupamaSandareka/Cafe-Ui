import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    public auth : AuthService,
    public router : Router,
    private snackBarService : SnackbarService
  ) { }

  canActivate( route : ActivatedRouteSnapshot) : boolean{
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray.expectedRole;

    const token : any = localStorage.getItem('token');

    var tokenPayload : any;
    try{
      tokenPayload = jwt_decode(token);
    }
    catch(err){
      localStorage.clear();
      this.router.navigate(['/'])
    }

    let expectedRole = '';

    for(let i=0; i<expectedRoleArray.length; i++){

    }
  }
}
