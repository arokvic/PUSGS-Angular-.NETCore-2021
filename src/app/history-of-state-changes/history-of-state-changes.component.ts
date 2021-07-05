import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoryState } from '../entities/spHistoryState';
import { NavigationService } from '../services/navigation.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-history-of-state-changes',
  templateUrl: './history-of-state-changes.component.html',
  styleUrls: ['./history-of-state-changes.component.css']
})
export class HistoryOfStateChangesComponent implements OnInit {

  form = new FormGroup({
    newStatus: new FormControl('Draft'),
    usersThatModified: new FormControl('')
    
  });
  historyStates: HistoryState[] = [];
  public page = 10;
  public pageSize = 3;

  public component = "history-of-state-changes";
  public toNavbar = [this.form, this.component];
  public displayStateChange = false;

  constructor(private _sharedService: SharedService, private router: Router, 
              private navigationService: NavigationService) { }

  ngOnInit(): void {
    //ako je lista izmjena od strane korisnika prazna.. ostaje display false
  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    this._sharedService.emitChange(this.toNavbar);
    //this.navigationService.navigation.next(false); //da bi se ponovo prikazao content safety docs komponente
    this.router.navigate(['/safety-documents/new/multimedia-attachments']);
  }


}
