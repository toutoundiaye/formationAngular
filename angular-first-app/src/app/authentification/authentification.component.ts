import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  message: string = null;
  btnState: boolean = false;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.authInformation();
  }

  private authInformation() {
    if (this.auth.isLogged) {
      this.message = 'Bienvenue James!';
      this.btnState = true;
    } else {
      this.message = null;
      this.btnState = false;
    }
  }

  public login() {
    this.auth.login();
    this.authInformation();
  }

  public logout(){
    this.auth.logout();
    this.authInformation();
  }
}
