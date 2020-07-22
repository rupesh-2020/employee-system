import { Component } from '@angular/core';
//import { EmployeeServiceService } from './employee-service.service';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* title = 'my-angular-project';
  todaydate:Date;
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};   
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  isavailable = true;   //variable is set to true      
 
  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit() {
      this.todaydate = this.employeeService.showTodayDate();
   }

   myClickFunction(event) { 
      //just added console.log which will display the event details in browser on click of the button.
      alert("Button is clicked");
      console.log(event);
   }   
   changemonths(event) {
      alert("Changed month from the Dropdown");
      console.log(event);
   }*/
   currentUser: User;

   constructor(
       private router: Router,
       private authenticationService: AuthenticationService
   ) {
       this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

   logout() {
       this.authenticationService.logout();
       this.router.navigate(['/login']);
   }
}
