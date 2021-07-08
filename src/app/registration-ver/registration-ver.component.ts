import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration-ver',
  templateUrl: './registration-ver.component.html',
  styleUrls: ['./registration-ver.component.css']
})
export class RegistrationVerComponent implements OnInit {

  public usersToBeVerified : User[] = [];

  constructor(private userService: UserService) {
    this.userService.GetPendingUsers().subscribe(data => this.usersToBeVerified = data);
   }

  ngOnInit(): void {

   
    console.log(this.usersToBeVerified.length);
    console.log(this.usersToBeVerified);
    
  }


  activate(username:string){
    
    this.userService.acceptUser(username);
    setTimeout(() => {
      console.log('hello');
  }, 1000);
    location.reload();
  }
  decline(username:string){
    this.userService.declineUser(username);
    setTimeout(() => {
      console.log('hello');
  }, 1000);
    location.reload();
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}



}
