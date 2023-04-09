import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8080'

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  ngOnInit():void{
    
  }

  public login(loginData:any){
    return this.http.post(`${this.baseUrl}/generate-token`, loginData);
  }

  public userSession(token: any){
    localStorage.setItem('token', token);
  }

  public isUserLogged(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null)
    {
      return false;
    } else {
      return true;
    }
  }

  public clientLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    } else {
      this.clientLogOut;
    }
  }
  
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.http.get(`${this.baseUrl}/actual-user`)
  }
}
