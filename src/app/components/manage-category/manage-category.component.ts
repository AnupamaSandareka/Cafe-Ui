// manage-category.component.ts

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/service/category.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { DialogConfig } from '@angular/cdk/dialog';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {

  displayedColumn : string[] = ['name' , 'edit'];
  dataSource : any;
  responseMessage : any;

  constructor(
    private ngxService: NgxUiLoaderService,
    private categotyService : CategoryService,
    private dialog : MatDialog,
    private snackbarService : SnackbarService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.ngxService.start();
    this.tableData();
  }

  loadData() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);
  }

  tableData(){
    this.categotyService.getAllCategory().subscribe( (response : any) =>{
      console.log(response);
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response);
    }, (error : any) =>{
      this.ngxService.stop();
      console.log(error.error?.message);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  handleAddAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action : 'Add'
    };
    dialogConfig.width = "550px";
    const dialogRef = this.dialog.open(CategoryComponent, dialogConfig);
    this.router.events.subscribe( ()=> {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddCategory.subscribe( (response) => {
      this.tableData();
    })
  }

  handleEditAction(values:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action : 'Edit',
      data : values
    };
    dialogConfig.width = "550px";
    const dialogRef = this.dialog.open(CategoryComponent, dialogConfig);
    this.router.events.subscribe( ()=> {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddCategory.subscribe( (response) => {
      this.tableData();
    })
  }
}
