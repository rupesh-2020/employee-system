import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  employees;
  values = ["All", "By Department 0", "Salary Greater than 50000", "Salary less than 25000"];
    
  constructor(private http: Http, private router: Router) { }

  ngOnInit(): void {
    console.log("inside side bar ....");
    console.log(this.values);
    this.getAllEmployees();
  }

  getAllEmployees(): void {    
      this.http.get("http://localhost:8801/employees-all")
     .pipe(map((response) => response.json()))
     .subscribe((data) => this.displaydata(data)); 
  }

  getEmployeesByDepartment0(): void{
    this.http.get("http://localhost:8801/employees-by-department/Department_0")
     .pipe(map((response) => response.json()))
     .subscribe((data) => this.displaydata(data)); 
  }

  getEmployeesSalaryGT5000(): void{
    
    this.http.get("http://localhost:8801/employees-salary-greaterthan/50000")
     .pipe(map((response) => response.json()))
     .subscribe((data) => this.displaydata(data)); 
  }

  getEmployeesSalaryLT25000(): void{
     
    this.http.get("http://localhost:8801/employees-salary-lessthan/25000")
     .pipe(map((response) => response.json()))
     .subscribe((data) => this.displaydata(data)); 
  }

  displaydata(data): void {
    this.employees = data;
  }

  displayEmployeeBy(val): void{
    if(val == "By Department 0"){
        this.getEmployeesByDepartment0();
    }else if(val == "Salary Greater than 50000"){
        this.getEmployeesSalaryGT5000();
    }else if(val == "Salary less than 25000"){
        this.getEmployeesSalaryLT25000();
    }else{
        this.getAllEmployees();
    }
  }

  headerRedirect(){
    this.router.navigate(['/header']);
  }

  footerRedirect(){
    this.router.navigate(['/footer']);
  }
}
