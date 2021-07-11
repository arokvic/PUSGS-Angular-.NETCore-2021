import { Component, OnInit } from '@angular/core';
import { Incident } from '../entities/incident';
import { Router } from '@angular/router';
import { Inc1Service } from '../services/inc1.service';
import { WrInteractionService } from '../services/wr-interaction.service';
import {Sort} from '@angular/material/sort';
import {NgxPaginationModule} from 'ngx-pagination';



@Component({
  selector: 'app-incidents2',
  templateUrl: './incidents2.component.html',
  styleUrls: ['./incidents2.component.css']
})
export class Incidents2Component implements OnInit {


  cause : any;
  
  allIncidents : Incident [] = [];
  allIncidents2 : Incident [] = [];
  sortedData: Incident[] = [];
 public page = 3;
 public pageSize = 3;
 cp: number = 1;
  constructor(private router:Router, private  inc : Inc1Service, private wrService:WrInteractionService) {

    this.sortedData = this.allIncidents.slice();

   }

  ngOnInit(): void {
    this.inc.getIncidents()
    .subscribe(
      data=>{
        this.allIncidents = data;
      })

      this.wrService.currentActiveId$
    .subscribe(
      message => {
        console.log('Update stigao: ' + message);
        if(message == 0){
          this.updateWorkRequests();
        }
      }
    );

   


  }

  new(){
    // this.router.navigate(['/incidents/new']);
    this.router.navigate(['/incidents/new']);
   }
   updateWorkRequests(){


    this.inc.getIncidents()
    .subscribe(
      data => {
        this.allIncidents = data;
      }
    )

   }

   async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  fieldsChange(values:any):void {

    
    this.allIncidents2 = this.allIncidents;
    if (values.currentTarget.checked){
      this.allIncidents = [];
      this.inc.getMyIncidents().subscribe(data => { this.allIncidents = data;})
      
      
    }
    else{
      this.inc.getIncidents()
      .subscribe(
        data=>{
          this.allIncidents = data;
        })
      
    }
  }
  

 
  Search(){
   
    console.log(this.cause);
    if (this.cause === ''){
      
      this.ngOnInit();
    } 
    else {
      console.log ("nije prazno " + this.cause);
      this.allIncidents = this.allIncidents.filter(res => {
       console.log (res.cause.toLocaleLowerCase().match(this.cause.toLocaleLowerCase()));
        return res.cause.toLocaleLowerCase().match(this.cause.toLocaleLowerCase());
        
      });
      console.log(this.allIncidents);
    }
  }




  key  : string= 'id';
  reverse : boolean = false;
  sort (key : any){
    this.key = key;
    this.reverse = !this.reverse;
  }

}




