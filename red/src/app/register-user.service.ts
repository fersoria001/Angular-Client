import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  ngOnInit():void{
    
  }
  public addUser(user: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/usuarios/`, user, {headers: headers});
  }

}
