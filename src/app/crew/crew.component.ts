import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Crew } from '../entities/crew';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';
import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {


  crewForm = this.fb.group({    
      name: ['', [Validators.required]],     
   })

  
   public users : User[] = [];
   public potentialMembers : User[] = [];

   public allCrews: Crew[] = [];
   public crew = new Crew();
   
  constructor(private fb : FormBuilder, private userService : UserService, private crewService : CrewService) 
  { 
    let selected: Array<User>  = [];
    this.userService.AllWorkers().subscribe(
      data =>       
      this.users = data
      );
    console.log("svi useri "  + this.users);
  
      selected.forEach(user => {
        console.log("kuracc");
        if (user.userType === "Worker"){
          console.log("usaoooo");
          this.potentialMembers.push(user);
        }
      })

      for ( var i = 0 ; i < this.users.length ; i ++){
        console.log("kuracc");
        if (this.users[i].userType === "Worker"){
          console.log("usaoooo");
          this.potentialMembers.push(this.users[i]);
        }

      }
    
    console.log(" workewri " + this.potentialMembers);
     this.crewService.loadlCrews().subscribe( crews => this.allCrews = crews);


  }

  ngOnInit(): void {
  }


  DeleteCrew(id : string){
    this.crewService.deleteCrew(id);
    location.reload();




  }

  addCrew(){
    this.crew.name = this.crewForm.controls["name"].value;
    console.log(this.crew);
    this.crewService.saveCrew(this.crew);
    location.reload();
    

  }
  
  addCrewMember(username : string, event: any){
    console.log(username);
    event.target.disabled = true;
    this.crew.members = this.crew.members.concat(username + " ");
    setTimeout(() => {
      console.log('hello');
  }, 1000);
    console.log(this.crew.members);
    


  }
}
