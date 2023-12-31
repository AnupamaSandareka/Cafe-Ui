
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from 'src/app/service/dashboard.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit{

  role: any = localStorage.getItem('role');

  responseMessage : any;
  data : any;
  ngAfterViewInit(): void {
    
  }

  constructor(
    private dashboardService : DashboardService,
    private ngxService : NgxUiLoaderService,
    private snackbarService :SnackbarService,
    private router:Router
  ){
    this.ngxService.start();
    this.dashboardData();
  }

  dashboardData() {
    this.dashboardService.getDetails().subscribe(
      (response: any) => {
        console.log(response);
        this.ngxService.stop();
        this.data = response;
      },
      (error: any) => {
        this.ngxService.stop();
        console.error(error);  // Log the full error object
        
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  handleAllow(){
    if(this.role === 'admin'){
      this.router.navigate(['/category']);
    }
    else{
      this.snackbarService.openSnackBar("You are not allowed", GlobalConstants.error);
    }
  }
  
}
