import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuService } from 'src/app/service/menu.service';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    private menuService:MenuService,
    private dialog : MatDialog,
    private userService : UserService,
    private roter :  Router,
    private authService : AuthService
    ){}

  ngOnInit(): void {
    this.userService.checkToken().subscribe((response : any) => {
      this.roter.navigate(['/dashboard'])
    } , (error) => {
      console.log((error));
      
    })
  }

  toggleMenu(){
    this.menuService.toggle();
  }

  handleSignupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignupComponent,dialogConfig);
  }

  handleLoginAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(LoginComponent,dialogConfig);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  handleLogoutAction(){
    this.authService.clear();
    this.roter.navigate(['/']);
  }
}
