import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Params } from '@angular/router';
import { Assignment } from './assignment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private addEmp="http://localhost:8080/emp/addEmployee";
private getAllEmp="http://localhost:8080/emp/getAllEmployee";
private getEmpById="http://localhost:8080/emp/getById";
private getDpmById="http://localhost:8080/dpm/gedpmtById";
private updateEmployee="http://localhost:8080/emp/updateEmployee";
private updateDpm="http://localhost:8080/dpm/updateDepartment"
private deleteEmployee="http://localhost:8080/emp/deleteEmployee/";
private deleteDpm="http://localhost:8080/dpm/deleteDepartment/";
private saveDept="http://localhost:8080/dpm/addDepartment";
private geAllDpm="http://localhost:8080/dpm/getAlldepartment";
private assignment="http://localhost:8080/api/assignment";

  constructor(private httpClient:HttpClient) { }

  createEmployee(employee:any):Observable<any>{
    return this.httpClient.post<any>(this.addEmp,employee);
  }
  getAllEmployeeList():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.getAllEmp}`);
  }
  getAllDepartment():Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.geAllDpm}`);
  }
  getEmplyeeById(id:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.getEmpById}/${id}`);
  }

  getDpmById1(id:number):Observable<Department>
  {
    return this.httpClient.get<Department>(`${this.getDpmById}/${id}`);
  } 

  updateEmployeeById(id:number,employee:Employee):Observable<Object>
  {
    return this.httpClient.put(`${this.updateEmployee}/${id}`,employee);
  }

  updateDpmById(id:number,department:Department):Observable<Object>
  {
    return this.httpClient.put(`${this.updateDpm}/${id}`,department);
  }

  deleteEmployeeById(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(this.deleteEmployee+id);
  }
  deleteDepartment(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(this.deleteDpm+id);
  }
  createDepartment(department:any):Observable<any>{
    return this.httpClient.post<any>(this.saveDept,department);
  }

  assignEmployee(empId:number,deptId:number):Observable<Params>
  {
    return this.httpClient.post(`${this.assignment}/${empId}/${deptId}`,Assignment);
  }
}
