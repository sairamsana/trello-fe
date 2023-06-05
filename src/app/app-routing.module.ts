import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authlogin/login/login.component';
import { AuthenticateComponent } from './authlogin/authenticate/authenticate.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'authenticate', component: AuthenticateComponent },
{
  path: 'dashboard', component: LayoutComponent, children: [
    { path: 'default', component: DashboardComponent },
  ]
},
{ path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
