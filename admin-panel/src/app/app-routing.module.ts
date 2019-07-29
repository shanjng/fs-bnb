import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { BookingsComponent } from './components/bookings/bookings.component'
import { ListingsComponent } from './components/listings/listings.component'

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'}, 
  // {path: 'login', component: LoginComponent},
  // {path: 'dashboard', component: DashboardComponent},
  // {path: 'users', component: UsersComponent},
  // {path: 'properties', component: PropertiesComponent},
  // {path: 'bookings', component: BookingsComponent},
  {path: '', component:DashboardComponent, children:[
    {path: 'listings', component: ListingsComponent},
    {path: 'bookings', component: BookingsComponent},
    {path: 'users', component:UsersComponent}]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
