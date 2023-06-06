import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authlogin/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      { path: 'default', component: DashboardComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
