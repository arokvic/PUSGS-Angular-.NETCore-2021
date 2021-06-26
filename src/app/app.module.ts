import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { JwtModule } from "@auth0/angular-jwt";

export function getToken() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    MatDividerModule,
    RouterModule,
    ReactiveFormsModule,    
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken, 
        allowedDomains: ["localhost:44364"],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
