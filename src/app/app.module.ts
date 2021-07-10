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

import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableFilterPipe } from './pipes/table-filter.pipe';
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
import { SafetyDocumentsComponent } from './safety-documents/safety-documents.component';
import { NavbarIncidentComponent } from './navbar-incident/navbar-incident.component';
import { IncidentBasicInfoComponent } from './incident-basic-info/incident-basic-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewSafetyDocumentComponent } from './new-safety-document/new-safety-document.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SafetyDocumentsPageComponent } from './safety-documents-page/safety-documents-page.component';
import { HistoryOfStateChangesComponent } from './history-of-state-changes/history-of-state-changes.component';
import { MultimediaAttachmentsComponent } from './multimedia-attachments/multimedia-attachments.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsAdminComponent } from './settings-admin/settings-admin.component';
import { CrewComponent } from './crew/crew.component';
import { DevicesComponent } from './devices/devices.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ConsumersComponent } from './consumer/consumers/consumers.component';
import { NewConsumerComponent } from './consumer/new-consumer/new-consumer.component';
import { ModifyConsumerComponent } from './consumer/modify-consumer/modify-consumer.component';
import { RequestsComponent } from './requests/requests.component';
import { RegistrationVerificationComponent } from './registration-verification/registration-verification.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { NavbarWrComponent } from './work-requests/navbar-wr/navbar-wr.component';
import { BasicInfWrComponent } from './work-requests/basic-inf-wr/basic-inf-wr.component';
import { CallsComponent } from './calls/calls.component';
import { HistoryWrComponent } from './work-requests/history-wr/history-wr.component';
import { MultimediaWrComponent } from './work-requests/multimedia-wr/multimedia-wr.component';
import { EquipmentWrComponent } from './work-requests/equipment-wr/equipment-wr.component';
import { Incidents2Component } from './incidents2/incidents2.component';
import { BasicInfoIncident2Component } from './incidents2/basic-info-incident2/basic-info-incident2.component';
import { ResolutionIncident2Component } from './incidents2/resolution-incident2/resolution-incident2.component';
import { CallsIncident2Component } from './incidents2/calls-incident2/calls-incident2.component';
import { MultimediaIncident2Component } from './incidents2/multimedia-incident2/multimedia-incident2.component';
import { CrewIncident2Component } from './incidents2/crew-incident2/crew-incident2.component';
import { EquipmentIncident2Component } from './incidents2/equipment-incident2/equipment-incident2.component';
import { NavbarIncident2Component } from './incidents2/navbar-incident2/navbar-incident2.component';
import { RegistrationVerComponent } from './registration-ver/registration-ver.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { SwitchingPlansComponent } from './switching-plans/switching-plans.component';
import { NavbarSpComponent } from './switching-plans/navbar-sp/navbar-sp.component';
import { BasicInfoSpComponent } from './switching-plans/basic-info-sp/basic-info-sp.component';
import { MultimediaComponent } from './switching-plans/multimedia/multimedia.component';
import { InstructionsComponent } from './switching-plans/instructions/instructions.component';
import { CreateInstructionComponent } from './switching-plans/create-instruction/create-instruction.component';
import { HistoryComponent } from './switching-plans/history/history.component';
import { EquipmentComponent } from './switching-plans/equipment/equipment.component';
import { ElementsPageComponent } from './elements-page/elements-page.component';
import { CreateElementComponent } from './create-element/create-element.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

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
    HistoryComponent,
    IncidentsComponent,
    
    SafetyDocumentsComponent,
    NavbarIncidentComponent,
    IncidentBasicInfoComponent,
    NotificationsComponent,
    NewSafetyDocumentComponent,
    BasicInformationComponent,
    NavBarComponent,
    SafetyDocumentsPageComponent,
    HistoryOfStateChangesComponent,
    MultimediaAttachmentsComponent,
    SettingsComponent,
    SettingsAdminComponent,
    CrewComponent,
    DevicesComponent,
    ChecklistComponent,
    ConsumersComponent,
    NewConsumerComponent,
    ModifyConsumerComponent,
    RequestsComponent,
    RegistrationVerificationComponent,
    TableFilterPipe,
    WorkRequestsComponent,
    NavbarWrComponent,
    BasicInfWrComponent,
    CallsComponent,
    HistoryWrComponent,
    MultimediaWrComponent,
    EquipmentWrComponent,
    Incidents2Component,
    BasicInfoIncident2Component,
    ResolutionIncident2Component,
    CallsIncident2Component,
    MultimediaIncident2Component,
    CrewIncident2Component,
    EquipmentIncident2Component,
    NavbarIncident2Component,
    RegistrationVerComponent,
    MapComponent,
    SwitchingPlansComponent,
    NavbarSpComponent,
    BasicInfoSpComponent,
    MultimediaComponent,
    InstructionsComponent,
    CreateInstructionComponent,
    EquipmentComponent,
    ElementsPageComponent,
    CreateElementComponent,

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
    NgSelectModule,
    MatCardModule,
    NgxPaginationModule,
    LeafletModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
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
