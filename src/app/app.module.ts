import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authlogin/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { TrellocardComponent } from './features/trellocard/trellocard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';
import { NotificationService } from './service/notification.service';
import { AuthenticationService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { DeleteCardDailogueComponent } from './features/delete-card-dailogue/delete-card-dailogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    LayoutComponent,
    DashboardComponent,
    TrellocardComponent,
    DeleteCardDailogueComponent,
    
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

  providers: [UserServiceService,
    NotificationService,
    AuthenticationService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
