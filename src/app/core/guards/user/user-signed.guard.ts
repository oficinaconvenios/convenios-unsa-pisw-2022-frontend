import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSignedGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isUserSigned()){
        return true;
      }else{
        this.router.navigate(['/iniciar-sesion'])
        return false;
      }
  }

}
