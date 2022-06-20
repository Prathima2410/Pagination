import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
role = "Training Head"
id: number = 1;

  userdata: any;
  deptdata: any;
  coursedata: any;
  reviewdata: any;
  data: any;
  base64String: any;

 constructor(
   private DashboardService: DashboardService,
   private userService: UserService,
   private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.DashboardData()
    // this.getCourseCount()
    // this.getReviewCount()
    // this.getDepartmentCount()
    // this.getUserById();
  }
  // getUserCount(){
  //   this.DashboardService.getUserCount().subscribe(res =>
  //     {
  //       console.log(res)
  //       this.userdata = res
  //     })
  // }
  // getCourseCount(){
  //   this.DashboardService.getCourseCount().subscribe(res =>
  //     {
  //       console.log(res)
  //       this.coursedata = res
  //     })
  // }
  // getReviewCount(){
  //   this.DashboardService.getReviewCount().subscribe(res =>
  //     {
  //       console.log(res)
  //       this.reviewdata = res
  //     })
  // }
  // getDepartmentCount(){
  //   this.DashboardService.getDepartmentCount().subscribe(res =>
  //     {
  //       console.log(res)
  //       this.deptdata = res
  //     })
  // }
  DashboardData() {
    this.DashboardService.getDashboard().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}