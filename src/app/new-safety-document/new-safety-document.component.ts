import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'app-new-safety-document',
  templateUrl: './new-safety-document.component.html',
  styleUrls: ['./new-safety-document.component.css']
})
export class NewSafetyDocumentComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.navigation.next(true)
    
  }

  
  
  
 

 

}
