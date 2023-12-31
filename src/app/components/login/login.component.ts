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

  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
    };
  
    this.userService.login(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();

        console.log(response);
        
  
        // Assuming 'response' is a string, you can directly use it
        var parts = response.message.split('|');
        var role = parts[0];
        var token = parts[1];
  
        // Save role and token in local storage
        localStorage.setItem('role', role);
        localStorage.setItem('token', token);
  
        if (role === 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/order']);
        }
      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
  
        // Close the dialog on error (invalid credentials)
        this.dialogRef.close();
      }
    );
  }
  
    

  handleForgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

}
