import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  page: number = 1;
  totalLength:any;

  constructor(private dservice: DepartmentService, private auth : LoginService) { }
  
  role : string = 'Training Head';
  data: any;
  _dept='';
  
  ngOnInit(): void {
    //this.role = this.auth.getRole();
    this.GetallDepartment()
  }
  GetallDepartment() {
    this.dservice.getAllDepartment().subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
  SearchActive(search : string){
    this._dept = search;
  }
}