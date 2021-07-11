import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SafetyDocument } from '../entities/safety-document';
import { SwitchingPlan } from '../entities/switchingPlan';
import { WorkRequest } from '../entities/workRequest';
import { DocumentWrService } from '../services/document-wr.service';
import { DocumentService } from '../services/document.service';
import { SafetyDocumentsService } from '../services/safety-documents.service';
import { SwpInteractionService } from '../services/swp-interaction.service';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'piechart',
  templateUrl: './piechart.html'
})
export class PieChartComponent implements OnInit{
  // Pie
constructor(private doc:DocumentWrService,private saf:SafetyDocumentsService,private sw:DocumentService){
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

    this.doc.getWorkRequests().subscribe(data=> {
        this.workReq = data;
        this.pieChartData.push(this.workReq.length)
      })
      this.saf.loadSafetyDocuments().subscribe(data=> {
        this.safetyDoc = data;
        this.pieChartData.push(this.safetyDoc.length)
      })
      this.sw.getSwitchingPlans().subscribe(data=> {
        this.switchPlan = data;
        this.pieChartData.push(this.switchPlan.length)
      })
      
    
}
public pieChartOptions: ChartOptions = {
    responsive: true,
  };
    workReq:WorkRequest[] = [];
    safetyDoc:SafetyDocument[] = [];
    switchPlan:SwitchingPlan[] = [];

  public pieChartLabels:string[] = ['Work Requests', 'Safety Documents', 'Switching Plans'];
  public pieChartData:number[] = new Array();
  public pieChartType:ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

ngOnInit(){
    /*this.doc.getWorkRequests().subscribe(data=> {
        this.workReq = data;
        //this.brojWork = this.workReq.length;
        //console.log(this.brojWork);
        console.log(this.workReq.length);
      })
      this.saf.loadSafetyDocuments().subscribe(data=> {
        this.safetyDoc = data;
        //this.brojSaf = this.safetyDoc.length;
        //console.log(this.brojSaf);
        console.log(this.safetyDoc.length);
      })
      this.sw.getSwitchingPlans().subscribe(data=> {
        this.switchPlan = data;
        //this.brojSw = this.switchPlan.length;
        //console.log(this.brojSw);
        console.log(this.switchPlan.length);
      })
        let brojWork:number = this.workReq.length;
        let brojSaf:number = this.safetyDoc.length;
        let brojSw:number = this.switchPlan.length;
      this.pieChartData.push(this.workReq.length);
      this.pieChartData.push(this.safetyDoc.length);
      this.pieChartData.push(this.switchPlan.length);
*/
    }
}
    
