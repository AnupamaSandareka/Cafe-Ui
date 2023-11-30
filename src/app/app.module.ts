import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignupComponent } from './components/signup/signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxUiLoaderConfig , NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConformationComponent } from './components/confirmation/conformation.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const ngxUiLoaderConfig : NgxUiLoaderConfig = {
  text : "Loading...",
  textColor : "#FFFFFF",
  textPosition : "center-center",
  bgsColor : "#7b1fa2",
  fgsColor : "#7b1fa2",
  fgsType : SPINNER.squareJellyBox,
  fgsSize : 100,
  hasProgressBar : false
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ManageCategoryComponent,
    SidebarComponent,
    ConformationComponent,
    ChangePasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    NgIf,
    MatListModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
