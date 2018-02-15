import {Injectable} from '@angular/core';

@Injectable()
export class AuthentificationService   {

  isLogged = false;

  constructor() {

    const data = localStorage.getItem('auth');
    this.isLogged = (data === 'log');
  }

  public login() {
    this.isLogged = true;
    this.save('log');
  }

  public logout() {
    this.isLogged = false;
    this.save('null');
  }

  private save(data) {
    localStorage.setItem('auth', data);
  }
}
