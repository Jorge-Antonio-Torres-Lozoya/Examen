import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(`${environment.apiUrl}cliente`)
  }
  getById(id:string){
    return this.http.get<any>(`${environment.apiUrl}cliente/${id}`)
  }
  create(data:any){
    return this.http.post<any>(`${environment.apiUrl}cliente`,data)
  }

update(data:any,id:string){
  return this.http.put<any>(`${environment.apiUrl}cliente/${id}`,data)
  }
  deleteCliente(id:string){
    return this.http.delete<any>(`${environment.apiUrl}cliente/${id}`)

  }
}
