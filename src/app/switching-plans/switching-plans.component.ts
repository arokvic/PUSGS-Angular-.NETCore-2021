import { Component, OnInit } from '@angular/core';
import { SwitchingPlan } from '../entities/switchingPlan';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { SwpInteractionService } from '../services/swp-interaction.service';

@Component({
  selector: 'app-switching-plans',
  templateUrl: './switching-plans.component.html',
  styleUrls: ['./switching-plans.component.css']
})
export class SwitchingPlansComponent implements OnInit {

  public page = 10;
  public pageSize = 10;

  cp: number = 1;

  switchingPlans: SwitchingPlan[] = [];

  constructor(private router:Router, private documentService:DocumentService, private swpService:SwpInteractionService) { }

  ngOnInit(): void {
    this.documentService.getSwitchingPlans()
    .subscribe(
      data => {
        this.switchingPlans = data;
      }
    )

    this.swpService.currentActiveId$
      .subscribe(
        message => {
          console.log('Update stigao: ' + message);
          if(message == 0){
            this.updateSwitchingPlans();
          }
        }
      );

      (async () => { 
        console.log("Primljena");
        await this.delay(1000);
        console.log("Izvrsena")
        this.documentService.getSwitchingPlans()
        .subscribe(
          data => {
            this.switchingPlans = data;
          }
        )
    })();

  }


  updateSwitchingPlans(){
    this.documentService.getSwitchingPlans()
    .subscribe(
      data => {
        this.switchingPlans = data;
      }
    )
  }

  new(){
    
    this.router.navigate(['/switching-plans/new/basic-info']);
  }

  openDocument(id: number){
    console.log(id);
    this.swpService.setIdValue(id);
    this.router.navigate(['/switching-plans/new/basic-info']);

  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  formatDate(dat:string):string{
    let retVal = new Date(dat);

    console.log(retVal.toLocaleString().split(',')[0])

    return retVal.toLocaleString().split(',')[0];
  }


}
