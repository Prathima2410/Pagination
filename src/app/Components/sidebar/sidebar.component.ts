import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role : string = 'Training Head';
  constructor(private auth: LoginService) {  }

  ngOnInit(): void {  
    //this.role = this.auth.getRole();
    //this.role = 'Training Head';
    this.ngDoCheck();
  }
  ngDoCheck(): void {
    this.IsStored();
  }
  IsStored(){
    if(this.auth.IsloggedIn()){
      return true;
    }
    else{
      return false;
    }
  }
  LogOut(){
    localStorage.clear();
    window.location.reload();
  }

  toggle(){
    $('.sidebar, .content').toggleClass("open");
  }
}
