import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
employees:any;
isDelete=false;
message!:String;

  constructor(private employeeService:EmployeeserviceService,
    private router:Router,
    private route:ActivatedRoute) {

       
     }

  ngOnInit(): void {
    this.getAllEmp();
  }
  private getAllEmp()
  {
    this.employeeService.getAllEmployeeList().subscribe(data=>
      {
        this.employees=data;
        //console.log(data);
      })
  }
  updateEmployee(id:any)
  {
   this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id:any)
  {
    this.employeeService.deleteEmployeeById(id).subscribe(data=>{
   console.log(data);
   
   

// this.getAllEmp();
    this.reloadPage();
    });
  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
   
  });
}
  
}