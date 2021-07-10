import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../services/elements.service';
import { Element } from '../entities/element';
import { MatDialog } from '@angular/material/dialog';
import { CreateElementComponent } from '../create-element/create-element.component';

@Component({
  selector: 'app-elements-page',
  templateUrl: './elements-page.component.html',
  styleUrls: ['./elements-page.component.css']
})
export class ElementsPageComponent implements OnInit {

  type!: string;
  public allElements : Element[] = [];
  public page = 10;
  public pageSize = 3;
  cp: number = 1;


  constructor(private elementsService: ElementsService,  public dialog: MatDialog) { }

  ngOnInit(): void {

    this.elementsService.loadElements()
    .subscribe(data => this.allElements = data);

  }

  openDialog(): void {
    console.log('otvorio sam konzolu');
    const dialogRef = this.dialog.open(CreateElementComponent, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("/" + result.elementName + "/" + result.elementType + "/" + result.elementCoordinates + "/" + result.elementAddress);

      //dodati provjere da li je Cancel ili Save -- za sad ima samo Save i svaki put cuva
                        //type address name id coordinates
      let element = new Element(result.elementType, 40324, result.elementName, result.elementAddress, result.elementCoordinates, false);
      this.elementsService.saveElement(element)
                          .subscribe(sEelement => this.allElements.push(sEelement));

    });
  }
}