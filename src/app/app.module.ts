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
import { SwitchingPlanComponent } from './switching-plan/switching-plan.component';
import { NewSpComponent } from './switching-plan/new-sp/new-sp.component';
import { BasicInfoSpComponent } from './switching-plan/basic-info-sp/basic-info-sp.component';
import { NavbarSpComponent } from './switching-plan/navbar-sp/navbar-sp.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncidentsComponent } from './incidents/incidents.component';

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
    SwitchingPlanComponent,
    NewSpComponent,
    BasicInfoSpComponent,
    NavbarSpComponent,
    IncidentsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
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
    MatDatepickerModule,
    MatCardModule,
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
