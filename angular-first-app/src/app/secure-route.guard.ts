import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthentificationService} from './service/authentification.service';

@Injectable()
export class SecureRouteGuard implements CanActivate {

  constructor(private auth: AuthentificationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(this.auth.isLogged);
    if (this.auth.isLogged) {
      return true;
    }

    this.router.navigate(['auth']);
    return false;
  }
}
