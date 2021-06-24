import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { ContentComponent } from './content/content.component' 
import { RegisterComponent} from './register/register.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';

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
    component: ContentComponent
  },
  {
    path: 'dashboard',
     component: DashboardComponent,
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
     component: ProfileComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: 'profile', // child route path
        component: ProfileComponent, // child route component that the router renders
      }
    ]
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
