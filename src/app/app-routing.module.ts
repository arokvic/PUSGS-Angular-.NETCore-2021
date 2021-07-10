import { NgModule,Component,Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { ContentComponent } from './content/content.component' 
import { RegisterComponent} from './register/register.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { SafetyDocumentsComponent } from './safety-documents/safety-documents.component';
import { NavbarIncidentComponent } from './navbar-incident/navbar-incident.component';
import { IncidentBasicInfoComponent } from './incident-basic-info/incident-basic-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewSafetyDocumentComponent } from './new-safety-document/new-safety-document.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { HistoryOfStateChangesComponent } from './history-of-state-changes/history-of-state-changes.component';
import { MultimediaAttachmentsComponent } from './multimedia-attachments/multimedia-attachments.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsAdminComponent } from './settings-admin/settings-admin.component';
import { ViewGuard } from './view.guard';
import { CrewComponent } from './crew/crew.component';
import { DevicesComponent } from './devices/devices.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ConsumersComponent } from './consumer/consumers/consumers.component';
import { NewConsumerComponent } from './consumer/new-consumer/new-consumer.component';
import { ModifyConsumerComponent } from './consumer/modify-consumer/modify-consumer.component';
import { RequestsComponent } from './requests/requests.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { NavbarWrComponent } from './work-requests/navbar-wr/navbar-wr.component';
import { BasicInfWrComponent } from './work-requests/basic-inf-wr/basic-inf-wr.component';
import { CallsComponent } from './calls/calls.component';
import { HistoryWrComponent } from './work-requests/history-wr/history-wr.component';
import { MultimediaWrComponent } from './work-requests/multimedia-wr/multimedia-wr.component';
import { EquipmentWrComponent } from './work-requests/equipment-wr/equipment-wr.component';
import { Incidents2Component } from './incidents2/incidents2.component';
import { NavbarIncident2Component } from './incidents2/navbar-incident2/navbar-incident2.component';
import { BasicInfoIncident2Component } from './incidents2/basic-info-incident2/basic-info-incident2.component';
import { ResolutionIncident2Component } from './incidents2/resolution-incident2/resolution-incident2.component';
import { CallsIncident2Component } from './incidents2/calls-incident2/calls-incident2.component';
import { MultimediaIncident2Component } from './incidents2/multimedia-incident2/multimedia-incident2.component';
import { CrewIncident2Component } from './incidents2/crew-incident2/crew-incident2.component';
import { EquipmentIncident2Component } from './incidents2/equipment-incident2/equipment-incident2.component';
import { RegistrationVerComponent } from './registration-ver/registration-ver.component';
import { SwitchingPlansComponent } from './switching-plans/switching-plans.component';
import { BasicInfoSpComponent } from './switching-plans/basic-info-sp/basic-info-sp.component';
import { HistoryComponent } from './switching-plans/history/history.component';
import { MultimediaComponent } from './switching-plans/multimedia/multimedia.component';
import { InstructionsComponent } from './switching-plans/instructions/instructions.component';
import { NavbarSpComponent } from './switching-plans/navbar-sp/navbar-sp.component';
import { EquipmentComponent } from './switching-plans/equipment/equipment.component';
import { MapComponent } from './map/map.component';
const routes: Routes = [
 
//  {
 //   path: "verify",
  //  component: RegistrationVerComponent
 // },
  {
    path: "register",
    component: RegisterComponent
  }, 
  {
    path: "login",
    component: LoginComponent
    
  },
  {
    path: "map",
    component: MapComponent
    
  },
  {
    path: "",
    component: ContentComponent,
    children: [
      {
        path: '', // child route path
        component: AppComponent, // child route component that the router renders
      }
    ]
  },
  {
    path: "home",
    component: AppComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: ContentComponent, // child route component that the router renders
      }
    ]
  },
  {
    path: 'dashboard',
    
     component: AppComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: DashboardComponent, // child route component that the router renders
      }
    ]
  
  },
  {
    path: 'profile',
     component: AppComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: ProfileComponent, // child route component that the router renders
      }
    ]
  
  },
  {
    path: 'switching-plans',
    component:AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component:SwitchingPlansComponent,
      },
      {
        path: 'new',
        component: NavbarSpComponent,
        children:[
          {
            path:'basic-info',
            component: BasicInfoSpComponent
          },
          {
            path: 'history-state',
            canActivate: [AuthGuard],
            component: HistoryComponent
          },
          {
            path: 'multimedia',
            canActivate: [AuthGuard],
            component: MultimediaComponent
          },
          {
            path: 'equipment',
            canActivate: [AuthGuard],
            component: EquipmentComponent
          },
          {
            path: 'instructions',
            canActivate: [AuthGuard],
            component: InstructionsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'safety-documents',
     component: AppComponent,

     canActivate: [AuthGuard],
      children: [
        {
          path: '', // child route path
        component: SafetyDocumentsComponent,
        children:[{
          path: 'new',
          component: NewSafetyDocumentComponent,
          children:[
            {
              path: 'basic-info',
              component: BasicInformationComponent
            },
            {
              path: 'history-of-state-changes',
              component: HistoryOfStateChangesComponent
            }
            ,
            {
              path: 'multimedia-attachments',
              component: MultimediaAttachmentsComponent
            },
            {
              path: 'document-devices',
              component: DevicesComponent
            },
            {
              path: 'checklist',
              component: ChecklistComponent
            }
          ]
        }]
        }
      ]
    },
    {
      path: 'work-requests',
      component:AppComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component:WorkRequestsComponent,
        },
        {
          path: 'new',
          component: NavbarWrComponent,
          children:[
            {
              path:'basic-info',
              component: BasicInfWrComponent
            },
            {
              path: 'history-state',
              canActivate: [AuthGuard],
              component: HistoryWrComponent
            },
            {
              path: 'multimedia',
              canActivate: [AuthGuard],
              component: MultimediaWrComponent
            },
            {
              path: 'equipment',
              canActivate: [AuthGuard],
              component: EquipmentWrComponent
            }
          ]
        }
      ]
    },
    {
      path: 'incidents',
      component:AppComponent,
      
      children: [
        { 
          path: 'all',
          component:Incidents2Component,
        },
        {
          path: 'new',
          component: NavbarIncident2Component,
          children:[
            {
              path:'basic-info',
              component: BasicInfoIncident2Component
            },
            {
              path:'resolution',
              component: ResolutionIncident2Component
            },
            {
              path:'calls',
              component: CallsIncident2Component
            }
            ,
            {
              path:'multimedia',
              component: MultimediaIncident2Component
            }   ,
            {
              path:'crew',
              component: CrewIncident2Component
            } ,
            {
              path:'equipment',
              component: EquipmentIncident2Component
            }          
        
        /*
        {
          path: 'history-state',
          canActivate: [AuthGuard],
          component: HistorySpComponent
        },
        {
          path: 'multimedia',
          canActivate: [AuthGuard],
          component: MultimediaSpComponent
        },
        {
          path: 'equipment',
          canActivate: [AuthGuard],
          component: EquipmentSpComponent
        },
        {
          path: 'instructions',
          canActivate: [AuthGuard],
          component: InstructionsSpComponent
        }*/


        ]

        }
     ]


   

      

    },
    
    {
      path: 'notifications',
       component:AppComponent,
       canActivate: [AuthGuard],
       children: [
        {
          path: '', // child route path
          component: NotificationsComponent, // child route component that the router renders
        }
      ]
    
    },

    {
      path: 'settings',
       component:AppComponent,
       canActivate: [AuthGuard],
       children: [
        {
          path: '', // child route path
          component: SettingsComponent, // child route component that the router renders
        }
      ]
    
    },
    {
      path: 'admin-settings',
       component:AppComponent,
       canActivate: [AuthGuard],
       children: [
        {
          path: '', // child route path
          component: SettingsAdminComponent, // child route component that the router renders
        }
      ]
    
    },
    {
      path: "crew",
      component: CrewComponent
    },
    {

      path: 'consumers',
       component:AppComponent,
       canActivate: [AuthGuard],
       children: [
        {
          path: '', // child route path
          canActivate: [AuthGuard],
          component: ConsumersComponent, // child route component that the router renders
        }
      ]
    },
    {
   
      path: 'newConsumer',
       component:AppComponent,
       canActivate: [AuthGuard],
       children: [
        {
          path: '', // child route path
          canActivate: [AuthGuard],
          component: NewConsumerComponent, // child route component that the router renders
        }
      ]
    },
    {
   
        path: 'modifyConsumer',
         component:AppComponent,
         canActivate: [AuthGuard],
         children: [
          {
            path: '', // child route path
            canActivate: [AuthGuard],
            component: ModifyConsumerComponent, // child route component that the router renders
          }
        ]
      
    },
    {
   
      path: 'requests',
       component:AppComponent,
       canActivate: [AuthGuard],
       children: [
        {
          path: '', // child route path
          canActivate: [AuthGuard],
          component: RequestsComponent,
          children : [
            {
              path: "",
              component: RegistrationVerComponent
            }
          ] // child route component that the router renders
        }
      ]
    
  },
  {
   
    path: 'calls',
     component:AppComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        canActivate: [AuthGuard],
        component: CallsComponent, // child route component that the router renders
      }
    ]
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function isSettingsAdmin(): Type<Component> {

  if(ViewGuard.prototype.canActivate()){

    return <Type<Component>>SettingsAdminComponent;

  }else{

    return <Type<Component>>SettingsComponent;

  }


}
