import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { error } from 'console';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee:any;

  constructor(private employeeService:EmployeeserviceService,
    private router:Router) {

      this.employee=new Employee();
      
     }

  ngOnInit(): void { 
  }

saveEmployee()
{
this.employeeService.createEmployee(this.employee).subscribe(data=>{
  console.log(data);
  this.goToEmployeeList();

},
error=>console.log(error)
);
}

goToEmployeeList()
{
this.router.navigate(['/employees']);
}
  onSubmit()
  {
this.saveEmployee();
  }
}
