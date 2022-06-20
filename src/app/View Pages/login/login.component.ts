import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginservice : LoginService, private router: Router) { }

  Login:any={
    Username:'',
    Password:''
  }
  Tokendata:any;

  ngOnInit(): void {}  

  OnSubmit(){
    this.loginservice.userAuthorization(this.Login.Username,this.Login.Password).subscribe(result=>{
      if(result != null){
        this.Tokendata = result.token
        localStorage.setItem('token',this.Tokendata);
        this.router.navigate([''])
      }
    },err=>{
      console.log('Error');
    })
  }
}
