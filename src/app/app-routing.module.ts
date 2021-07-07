import { NgModule,Component,Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { ContentComponent } from './content/content.component' 
import { RegisterComponent} from './register/register.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SwitchingPlanComponent } from './switching-plan/switching-plan.component';
import { BasicInfoSpComponent } from './switching-plan/basic-info-sp/basic-info-sp.component';
import { NavbarSpComponent } from './switching-plan/navbar-sp/navbar-sp.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { HistorySpComponent } from './switching-plan/history-sp/history-sp.component';
import { MultimediaSpComponent } from './switching-plan/multimedia-sp/multimedia-sp.component';
import { EquipmentSpComponent } from './switching-plan/equipment-sp/equipment-sp.component';
import { InstructionsSpComponent } from './switching-plan/instructions-sp/instructions-sp.component';
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

const routes: Routes = [
 
  {
    path: "register",
    component: RegisterComponent
  }, 
  {
    path: "login",
    component: LoginComponent
    
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
     component: AppComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: SwitchingPlanComponent, // child route component that the router renders
        canActivate: [AuthGuard],

      },
      {
        path: 'new', // child route path
           canActivate: [AuthGuard],
           component: NavbarSpComponent, // child route component that the router renders
           children: [
             {
               path: 'basic-info',
               canActivate: [AuthGuard],
               component: BasicInfoSpComponent
             },
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
       component: AppComponent,
       
       children: [
          {
        path: '',
        component: IncidentsComponent 
          },
          {
        path : "new" ,
        component : NavbarIncidentComponent,
        children : [
          {
            path: 'basic-info',         
            component: IncidentBasicInfoComponent
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
          component: RequestsComponent, // child route component that the router renders
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
