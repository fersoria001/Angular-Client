import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

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
  
  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void{

  }
/* Esta funcion es llamada al enviar un formulario de tipo login
   llama a la funcion de login contenida en el loginService y se suscribe
   para recibir data de tipo any que es un objeto con la propiedad token
   y lo guarda en localstorage a traves del metodo userSession,
   luego se suscribe a la funcion getCurrentUser para recibir un user
   de tipo user(no tipeado todavia)
   @param data de tipo login {username: string, password: string}
   #post setlocalstorage token, getcurrentuser con agregado del bearer por medio
   de un interceptor.
*/
  formSubmit(){
    this.loginService.login(this.loginData).subscribe((data: any) => {
      console.log(data);
      this.loginService.userSession(data.token);
      this.loginService.getCurrentUser().subscribe((user:any) => {
      this.loginService.setUser(user)
      console.log(user)

      if(this.loginService.getUserRole() == "ADMIN")
      {
        this.router.navigate(['admin']);
      } else if (this.loginService.getUserRole() == "NORMAL") {
        this.router.navigate(['home']);
      } else {
        this.loginService.clientLogOut();
      }
      })
    }, (error:any) => {
      console.log(error);
    })
  }



}
