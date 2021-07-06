import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkRequest } from '../entities/workRequest';
import { DocumentService } from '../services/document.service';
import { DocumentWrService } from '../services/document-wr.service';
import { WrInteractionService } from '../services/wr-interaction.service';

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css']
})
export class WorkRequestsComponent implements OnInit {

  public page = 10;
  public pageSize = 10;


  workRequests: WorkRequest[] = [];

  constructor(private router:Router, private documentService:DocumentWrService, private wrService:WrInteractionService) { }

  ngOnInit(): void {
    this.documentService.getWorkRequests()
    .subscribe(
      data=>{
        this.workRequests = data;
      }
    )

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
      this.documentService.getWorkRequests()
      .subscribe(
        data => {
          this.workRequests = data;
        }
      )
    })();

  }


  updateWorkRequests(){
    this.documentService.getWorkRequests()
    .subscribe(
      data => {
        this.workRequests = data;
      }
    )
  }

  new(){
    this.router.navigate(['/work-requests/new/basic-info']);
  }

  openDocument(id: number){
    console.log(id);
    this.wrService.setIdValue(id);
    this.router.navigate(['/work-requests/new/basic-info']);

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
