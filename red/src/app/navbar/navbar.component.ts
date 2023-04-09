import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(public loginService: LoginService){

  }

  ngOnInit(): void {

  }

  public logout()
  {
    this.loginService.clientLogOut();
    window.location.reload();
  }
}
