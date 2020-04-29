import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'rama',40000,"JAVA"),
   new Employee(1,'aish',2000,"Angular"),
   new Employee(5,'sushma',70000,"SQL"),
   new Employee(4,'honey',6000,"JAVA"),
   new Employee(3,'shrey',22000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}