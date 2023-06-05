import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authlogin/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AuthenticateComponent } from './authlogin/authenticate/authenticate.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { TrellocardComponent } from './features/trellocard/trellocard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticateComponent,
    NotfoundComponent,
    LayoutComponent,
    DashboardComponent,
    TrellocardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule.forRoot(),
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
