import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { CourseService } from 'src/app/Services/course.service';
import { DatashareService } from 'src/app/Services/datashare.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private CourseService: CourseService,private datashare:DatashareService,private route:Router,private dservice: DepartmentService) { }
  _course = '';
  _dept = '';
  dept:any
  public data: CourseDTO[] = []
  ngOnInit(): void {
    this.getAllCourses();
    this.GetallDepartment();
  }
  getAllCourses() {
    this.CourseService.getAllCourses().
      subscribe(res => {
        console.log(res)
        this.data = res
      })
  }
  pass(id:number){
    this.route.navigate(['/CourseView'])
    this.datashare.SetCourseData(id);
  }
  GetallDepartment() {
    this.dservice.getAllDepartment().subscribe(res => {
      console.log(res)
      this.dept = res
    })
  }
}
