import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUsersComponent } from './register-users/register-users.component';

const routes: Routes = [
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
