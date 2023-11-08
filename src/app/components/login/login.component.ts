import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  hide = true;
  loginForm : any = FormGroup;
  responseMessage:any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private userService : UserService,
    public dialogRef : MatDialogRef<LoginComponent>,
    private snackBarService : SnackbarService,
    private ngxService : NgxUiLoaderService,
    private dialog : MatDialog 
  ){}

  ngOnInit(): void {
    this.loginForm  = this.formBuilder.group({
      email : [null , [Validators.required , Validators.pattern(GlobalConstants.emailRegex)]],
      password : [null , [Validators.required]]
    })
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email : formData.email,
      password : formData.password
    }

    this.userService.login(data).subscribe((response : any) => {
      
      this.ngxService.stop();
      this.dialogRef.close();
      localStorage.setItem('role',response.role);
      localStorage.setItem('token',response.token);
      if(response.role === 'admin'){
        this.router.navigate(['/dashboard']);
      }

      
    } , error => {
      if(error.error?.message){
        this.ngxService.stop();
        this.dialogRef.close();
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    })
  }

  handleForgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

}
