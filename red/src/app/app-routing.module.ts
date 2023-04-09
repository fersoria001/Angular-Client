import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component: AdminDashboardComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
{
  path:'login',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path:'register',
  component: RegisterUsersComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
