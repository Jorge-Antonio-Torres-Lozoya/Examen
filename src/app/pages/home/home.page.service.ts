import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http:HttpClient) { }

  getById(id:string){
    return this.http.get<any>(`${environment.apiUrl}admin/${id}`)
  }
}
