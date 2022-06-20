import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit,DoCheck,AfterContentInit,OnChanges {
  @Input("parentpost") childpost:number;
  constructor(private auth : LoginService, private user: UserService, private route:ActivatedRoute) {  }
  
  searchuser: string;
  data:any;
  role : string = 'Training Head';
  option: string = '';
  
  ngOnInit(): void {
    this.ngAfterContentInit();
  }
  ngOnChanges(): void {
    this.ngDoCheck();
    this.checkOption();
  }
  ngDoCheck(): void {
    this.getOption();
  }
  ngAfterContentInit(): void {
    this.ngDoCheck();
    this.checkOption();
  }
  getOption(){
    this.option = this.route.snapshot.params['option'];
  }
  getUserByRole(id:number) {
    this.user.getAllUsersByRole(id).subscribe((res) => {
      console.log(res);
      this.data = res
    });
  }
  checkOption(){
    if(this.option == "Co Ordinator")
    {
      this.getUserByRole(2);
    }
    else if(this.option == "Trainer"){
      this.getUserByRole(3);
    }
    else if(this.option == "Trainee"){
      this.getUserByRole(4);
    }
    else{
      this.getUserByRole(5);
    }
    this.ngDoCheck();
  }

  SearchActive(search : string){
    this.searchuser = search;
  }
}