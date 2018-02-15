import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthentificationService} from './service/authentification.service';

@Injectable()
export class SecureRouteGuard implements CanActivate {

  constructor(private auth: AuthentificationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(this.auth.isLogged);
    return this.auth.isLogged;
  }
}
