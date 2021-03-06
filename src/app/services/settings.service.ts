import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Street } from 'src/app/entities/street';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) { }

  loadStreets(): Observable<Street[]>{
    return this.http.get<Street[]>("https://localhost:44364/api/Settings/GetStreets");
  }

  
    changePriority(value:Street){
      
      this.http.put<Street>("https://localhost:44364/api/Settings/ChangePriority", value)
      .subscribe(
        error => console.log('oops', error)
      );
      }


  private header = new HttpHeaders({ 'content-type': 'application/json' });
  
  visibleNotifications(value:string){
    //const params = new HttpParams().append('value',value);

        const credentials = JSON.stringify(value);
        console.log(credentials);
        this.http.put("https://localhost:44364/api/Settings/VisibleNotifications",credentials)
        .subscribe(
          error => console.log('oops', error)
        );
        }

  resetSettings(){
          this.http.put("https://localhost:44364/api/Settings/ResetSettings", null)
          .subscribe(
            error => console.log('oops', error)
          );
          }

}
