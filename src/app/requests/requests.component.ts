import { Component, OnInit } from '@angular/core';
import { UserRequest } from '../entities/userRequest';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public allUsers : UserRequest[] = [];
  public page = 10;
  public pageSize = 5;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.loadUserRequests().subscribe(data => this.allUsers = data);
  }
  activate(username:string, id:number){
    this.userService.confirmUserRequest(username);
    this.allUsers.forEach((item, index) => {
      if(item.id === id){
        this.allUsers.splice(index, 1);
      }
    } )
    console.log(this.allUsers);
  }

  formatDate(dat:string):string{
    let retVal = new Date(dat);

    console.log(retVal.toLocaleString().split(',')[0])

    return retVal.toLocaleString().split(',')[0];
  }


}
