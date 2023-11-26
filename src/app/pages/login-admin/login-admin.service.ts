import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(private http:HttpClient) { }

  loginAdmin(data:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}admin/login`,data).pipe(
      tap((res)=>{
        localStorage.setItem('admin_id',res.admin_id);
      }),
    )


  }
}
