import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from 'src/app/entities/crew';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) { }

  saveCrew(crew: Crew){
    return this.http.post<Crew>("https://localhost:44364/api/Crew/AddCrew", crew)
    .subscribe(
      error=>console.log(error + "dasdasdadadaads")
    );
  }

  deleteCrew(id: string){
    const params = new HttpParams().append('id',id);
  
    return this.http.put("https://localhost:44364/api/Crew/DeleteCrew", null,{params: params})
    .subscribe(
      error=>console.log('oops', error)
  
    );
  }

  loadlCrews(): Observable<Crew[]>{
    return this.http.get<Crew[]>("https://localhost:44364/api/Crew/GetCrews");
  }






}
