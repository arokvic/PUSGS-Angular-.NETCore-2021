import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private router: Router, private breakpointObserver: BreakpointObserver) {
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt")!;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
  }

  ngOnInit(): void {
  }

}
