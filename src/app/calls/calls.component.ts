import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ElementsService } from '../services/elements.service';
import { SharedService } from '../services/shared.service';
import { Call} from '../entities/call';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  callsForm = new FormGroup({
    callsNumber: new FormControl('5')
    
  });

  public component = "calls";
  public toNavbar = [this.callsForm, this.component];

  public allCalls : Call[] = [];
  

  public page = 10;
  public pageSize = 3;



  constructor(private router: Router, private _sharedService: SharedService, private elementsService: ElementsService) { }

  ngOnInit(): void {
    this.allCalls = [{callId: "299daskd", reason: "No electricity", hazard: "Strong wind", comment: "Popravi to vise"},{callId: "32132daskd", reason: "No electricity", hazard: "Strong wind", comment: "Ajj"} ]

  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/incidents/new/incident-crew']);
  }

}
