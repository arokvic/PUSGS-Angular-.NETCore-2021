import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-registration-verification',
  templateUrl: './registration-verification.component.html',
  styleUrls: ['./registration-verification.component.css']
})
export class RegistrationVerificationComponent implements OnInit {

  type!: string;
  public allUsers : User[] = [];
  public page = 10;
  public pageSize = 5;

  constructor(private userService: UserService,  public dialog: MatDialog) { }

  ngOnInit(): void {
      this.userService.loadUsers().subscribe(data => this.allUsers = data);
  }
  activate(username:string){
    this.userService.activateUser(username);
    location.reload();
  }
  decline(username:string){
    this.userService.declineUser(username);
    location.reload();
  }

}
