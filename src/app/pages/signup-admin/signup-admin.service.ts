import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupAdminService {

  constructor(private http:HttpClient) { }

  signup(data:any){
    return this.http.post<any>(`${environment.apiUrl}admin/signup`,data);
  }

}
