import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-deparmentlist',
  templateUrl: './deparmentlist.component.html',
  styleUrls: ['./deparmentlist.component.css']
})
export class DeparmentlistComponent implements OnInit {

  departments:any;
  isDelete=false;
  message!:String;
  constructor(private employeeservice:EmployeeserviceService,private router:Router,private router1:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  private getAllDepartment()
  {
    this.employeeservice.getAllDepartment().subscribe(data=>
      {
        this.departments=data;
        console.log(data);
      })
  }

  updateDepatment(id:any)
  {
    this.router.navigate(['update-dpm',id]);
  }
  deleteDepartment(id:any)
  {
    this.employeeservice.deleteDepartment(id).subscribe(data=>{
      console.log(data);
      
  })
  }
  
}
