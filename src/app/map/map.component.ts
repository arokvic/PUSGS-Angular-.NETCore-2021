import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, tileLayer } from 'leaflet';
import { Inc1Service } from '../services/inc1.service';
import { Incident } from '../entities/incident';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  public maxLat = 45.26;
  public minLat = 45.23;
  public maxLng =19.8;
  public minLng = 19.75;
  private map: any;
  private center: L.LatLngExpression = [45.267136, 19.833549];
  public allIncidents: Incident[] = [];
  allCoordinates : number [] = [];
  

  icon2 = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
    })
  };

 


  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  };



  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  summit = marker([ 45.267136, 19.833549 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });
  

  options = {
    layers: [ this.streetMaps ],
    zoom: 14,
    center: latLng([ 45.267136, 19.833549 ])
  };

  



initMap(){

 

 
}

  


constructor(private  inc : Inc1Service) { 
  this.map = "";
  var marker2;
}

ngOnInit(): void {
 //this.inc.getIncidents().subscribe(data => {this.allIncidents = data;
  //console.log(this.allIncidents);
//});

var markers = [];
const map = L.map('map').setView([ 45.267136, 19.833549], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

this.inc.getIncidentCoordinates().subscribe(data=>{
  this.allCoordinates = data;
  console.log(this.allCoordinates);
  console.log(this.allCoordinates.length);

  for (var i = 0; i <= (this.allCoordinates.length - 2) ; i = i+2) {

    markers[i] = L.marker([this.allCoordinates[i], this.allCoordinates[i+1]], this.icon).addTo(map);
   // markers[i].bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
   }
  ;})

  



//marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

  

}
}
