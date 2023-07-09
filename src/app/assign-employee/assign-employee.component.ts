import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';
import { EmployeeserviceService } from '../employeeservice.service';
import { error } from 'console';

@Component({
  selector: 'app-assign-employee',
  templateUrl: './assign-employee.component.html',
  styleUrls: ['./assign-employee.component.css']
})
export class AssignEmployeeComponent implements OnInit {
assignment:Assignment=new Assignment();
  constructor(private employeeService:EmployeeserviceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.employeeService.assignEmployee(this.assignment.empId,
      this.assignment.deptId).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error))
  }
}
