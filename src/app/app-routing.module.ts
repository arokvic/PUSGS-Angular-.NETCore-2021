import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { ContentComponent } from './content/content.component' 
import { RegisterComponent} from './register/register.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "",
    component: ContentComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }, 
  {
    path: "login",
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
