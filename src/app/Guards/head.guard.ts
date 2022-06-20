import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class HeadGuard implements CanActivate {
  
  constructor(private auth : LoginService, private route : Router, private jwtHelp : JwtHelperService) {  }
  
  canActivate(){
    const token = localStorage.getItem("token");
    if(this.auth.getRole() == "Training Head"){
      if (token && this.jwtHelp.isTokenExpired(token))
      return true;
      else{
        this.route.navigate(['/Login']);
      return false;
      }
    }
    else{
      this.route.navigate(['/Login']);
      return false;
    } 
  }
  
}
