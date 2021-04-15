import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { MenuItem } from './menu-item';
import { Router, RouterLink }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'PUSGSprojekat';

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Register',
      icon: 'assignment_ind',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Log in',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  clickMenuItem(menuItem : MenuItem){
    console.log(menuItem);
    if(menuItem.label ==='Register')
    {
      this.router.navigate(['/register']);
    }
    if(menuItem.label ==='Log in')
    {
      this.router.navigate(['/login']);
    }
    if(menuItem.label ==='Home')
    {
      this.router.navigate(['']);
    }
    if(menuItem.label ==='Dashboard')
    {
      this.router.navigate(['/dashboard']);
    }
}
clickMenuItem1(menuItem : MenuItem){
  console.log(menuItem);
  if(menuItem.label ==='Register')
    {
      this.router.navigate(['/register']);
    }
    if(menuItem.label ==='Log in')
    {
      this.router.navigate(['/login']);
    }
    if(menuItem.label ==='Home')
    {
      this.router.navigate(['']);
    }
  if(menuItem.label ==='Dashboard')
  {
    this.router.navigate(['/dashboard']);
  }
}

}

