import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http:HttpClient) { }

 createVenta(data:any) {
    return this.http.post<any>(`${environment.apiUrl}venta`,data)
  }
createDetalleVenta(idVenta: number, detallesVenta: any[]) {
  const payload={
    id_venta:idVenta,
    detalles:detallesVenta
  }
  return this.http.post<any>(`${environment.apiUrl}detalle-venta`,payload)

  }
  getById(idVenta: number) {
    return this.http.get<any>(`${environment.apiUrl}venta/${idVenta}`)
  }
}
