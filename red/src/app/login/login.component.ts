import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public loginData = {
    username : '',
    password: ''
    }
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void{

  }

  formSubmit(){
    this.loginService.login(this.loginData).subscribe((data: any) => {
      console.log(data);
    }, (error:any) => {
      console.log(error);
    })
  }

}
