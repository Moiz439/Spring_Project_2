import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { AssignEmployeeComponent } from './assign-employee/assign-employee.component';
import { DeparmentlistComponent } from './deparmentlist/deparmentlist.component';
import { UpdateDpmComponent } from './update-dpm/update-dpm.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"create-employee", component:CreateEmployeeComponent},
  {path:"employees",component:EmployeelistComponent},
  {path:"update-employee/:id",component:UpdateEmployeeComponent},
  {path:"update-dpm/:id",component:UpdateDpmComponent},
  {path:"create-dept",component:CreateDepartmentComponent},
  {path:"assignment",component:AssignEmployeeComponent},
  {path:"deparmentlist",component:DeparmentlistComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
