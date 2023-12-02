import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ViewBillComponent } from './components/view-bill/view-bill.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: ManageCategoryComponent},
  { path: 'product', component: ManageProductComponent},
  { path: 'order', component: ManageOrderComponent},
  { path: 'user', component: ManageUserComponent},
  { path: 'bill', component: ViewBillComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }