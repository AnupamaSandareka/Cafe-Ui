import { AfterViewInit, Component } from '@angular/core';
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

  responseMessage : any;
  data : any;

  ngAfterViewInit(): void {
    
  }

  constructor(
    private dashboardService : DashboardService,
    private ngxUiLoader : NgxUiLoaderService,
    private snackbarService : SnackbarService
  ){
    this.ngxUiLoader.start();
    this.dashboardData();
  }

  dashboardData(){
    this.dashboardService.getDetails().subscribe((response : any) => {
      this.ngxUiLoader.stop();
      this.data = response;
    } , (error : any) => {
      this.ngxUiLoader.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error)
    })
  }
  

}
