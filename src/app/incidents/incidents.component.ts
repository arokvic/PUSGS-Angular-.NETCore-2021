import { Component, OnInit } from '@angular/core';
import { Incident } from '../entities/incident';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {


  allIncidents : Incident [] = [];
 public page = 5;
 public pageSize = 3;
  constructor() { }

  ngOnInit(): void {
    this.allIncidents = [{id: "1", typeOfInc: "dasd", priority: 2, confirmed : true , status : "active" , eta : "5" , ata : "6" , outageTime : "5" , etr : "3", affectedCustomers : 3 , calls : 4 , voltageLevel : 5 , scheduledTime : "3" },
    {id: "2", typeOfInc: "aaaaa", priority: 3, confirmed : false , status : "unactive" , eta : "5" , ata : "6" , outageTime : "5" , etr : "3", affectedCustomers : 3 , calls : 100 , voltageLevel : 100 , scheduledTime : "100" }]
  }

  ngAfterContentChecked() {}

}
