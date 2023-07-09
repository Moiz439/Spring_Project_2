import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
department:any;

//department:Department=new Department();
  constructor(private employeeService:EmployeeserviceService,private router:Router) { 

    this.department=new Department();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.createDepartment(this.department).subscribe(data=>{
      console.log(data);
      this.goToDepartmentList();
    
    },
    error=>console.log(error)
    );
  }

  goToDepartmentList()
  {
    this.router.navigate(['/deparmentlist']);
  }

  
}
