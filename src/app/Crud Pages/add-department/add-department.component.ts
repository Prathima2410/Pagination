import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  role ="Co-Ordinator"

  constructor(private departmentservice:DepartmentService, private routing : Router) { }
  public department:Department={
    id: 0,
    name:"",
    isDisabled: false
  }
  ngOnInit(): void {
  }
 
  OnSubmit(){
    this.departmentservice.postdepartment(this.department).subscribe(
      (      res: Department)=>{
        console.log(res)
        this.department=res
      }
    )
    this.routing.navigateByUrl("/Departmentlist");
  }
  
  
}
