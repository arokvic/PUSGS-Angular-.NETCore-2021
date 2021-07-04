import { NgModule } from '@angular/core';
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
    component: ContentComponent
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
  
  
     
  
       
  
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
