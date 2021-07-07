import { Component, OnInit } from '@angular/core';
import { Incident } from '../entities/incident';
import { Router } from '@angular/router';
import { Inc1Service } from '../services/inc1.service';
import { WrInteractionService } from '../services/wr-interaction.service';


@Component({
  selector: 'app-incidents2',
  templateUrl: './incidents2.component.html',
  styleUrls: ['./incidents2.component.css']
})
export class Incidents2Component implements OnInit {


  allIncidents : Incident [] = [];
 public page = 5;
 public pageSize = 3;
  constructor(private router:Router, private  inc : Inc1Service, private wrService:WrInteractionService) { }

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

    (async () => {
      console.log("Primljena");
      await this.delay(1000);
      console.log("Izvrsena")
      this.inc.getIncidents()
      .subscribe(
        data => {
          this.allIncidents = data;
        }
      )
    })();


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

}

