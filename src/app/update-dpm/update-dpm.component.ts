import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-dpm',
  templateUrl: './update-dpm.component.html',
  styleUrls: ['./update-dpm.component.css']
})
export class UpdateDpmComponent implements OnInit {

  departments:any;
  id!:any;
  constructor(private emplyeeService:EmployeeserviceService,private router:Router,private Activerouter:ActivatedRoute) {
    this.departments=new Department();
   }

  ngOnInit(): void {
    this.id=this.Activerouter.snapshot.params['id'];
    this.emplyeeService.getDpmById1(this.id).subscribe(data=>{
      this.departments=data;
    },
    error=>console.log(error));
  }
  onSubmit() {
    this.emplyeeService.updateDpmById(this.id,this.departments).subscribe(data=>{
      console.log(data);
      this.goTodepList();
    },
    error=>console.log(error));
  }

    goTodepList()
    {
      this.router.navigate(['deparmentlist']);
    }
}
