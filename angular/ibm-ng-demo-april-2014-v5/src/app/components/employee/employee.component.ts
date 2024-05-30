import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees: any[]=[];
  selectedEmployee: any;
  constructor(private employeeService: EmployeeService) { }
  getAllEmps = () => {
    console.log('getAllEmps');
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.employees = response;
        },
        error: (error) => { console.error(error); }
      });
  }
  getEmpById = (id: string) => {
    console.log(id);
    this.employeeService.getEmployeeById(id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.selectedEmployee = response.id;
        },
        error: (error) => { console.error(error); }
      });
  };
}







