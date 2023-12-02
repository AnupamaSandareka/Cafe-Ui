import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuService } from 'src/app/service/menu.service';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { ConformationComponent } from '../confirmation/conformation.component';

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
    private router :  Router,
    private authService : AuthService
    ){}

  ngOnInit(): void {
    this.userService.checkToken().subscribe((response : any) => {
      this.router.navigate(['/dashboard'])
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "350px";
    dialogConfig.data = {
      message : ' Logout?',
      confirmation : true
    }
    const dialogRef = this.dialog.open(ConformationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe( (response) => {
      dialogRef.close();
      localStorage.clear();
      this.router.navigate(['/']);
    })
  }
}
