import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(`${environment.apiUrl}producto`)
  }
  getById(id:string){
    return this.http.get<any>(`${environment.apiUrl}producto/${id}`)
  }
  create(data:any){
    return this.http.post<any>(`${environment.apiUrl}producto`,data)
  }

update(data:any,id:string){
  return this.http.put<any>(`${environment.apiUrl}producto/${id}`,data)
  }
  deleteProducto(id:string){
    return this.http.delete<any>(`${environment.apiUrl}producto/${id}`)

}
}
