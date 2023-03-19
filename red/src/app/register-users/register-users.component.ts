import { Component } from '@angular/core';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.sass']
})
export class RegisterUsersComponent {


  public user = {
  username : '',
  password: '',
  name: '',
  lastname: '',
  email: '',
  cellphone: '' 
  }

  constructor(private userService: RegisterUserService){}

  formSubmit(){
    this.userService.addUser(this.user).subscribe((data:any) => {
      console.log(data);
    },(error) => {
      console.log(error);
    })
  }


}
