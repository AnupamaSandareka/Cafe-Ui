
import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  password = true;
  confirmPassword = true;
  signupForm : any = FormGroup;
  responseMessage : any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private userService : UserService,
    private snackBarService : SnackbarService,
    public dialogRef : DialogRef<SignupComponent>,
    private ngxService : NgxUiLoaderService){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name : [null , [Validators.required , Validators.pattern(GlobalConstants.nameRegex)]],
      email : [null , [Validators.required , Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber : [null , [Validators.required , Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password : [null , [Validators.required]],
      confirmPassword : [null , [Validators.required]]
    })
  }

  valodateSubmit(){
    if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value){
      return true;
    }
    else{
      return false;
    }
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.signupForm.value;
    var data = {
      name : formData.name,
      email : formData.email,
      contactNumber : formData.contactNumber,
      password : formData.password
    }

    this.userService.signup(data).subscribe((response : any) => {
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = response?.message;
      this.snackBarService.openSnackBar(this.responseMessage,"");
      this.router.navigate(['/']);
    } , (error) => {
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }

}
