import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CoOrdinatorGuard implements CanActivate {

  constructor(private auth: LoginService, private route: Router, private jwtHelper : JwtHelperService) { }

  canActivate() {
    const token = localStorage.getItem("token");
    if (token && this.jwtHelper.isTokenExpired(token))
      return true;
    else{
      this.route.navigate(['/Login']);
      return false;
    } 
  }
}
