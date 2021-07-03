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
    path: 'switching-plan',
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
             }
            ]
      }
    ]
  
  },
  {
    path: 'incidents',
    component: IncidentsComponent




  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
