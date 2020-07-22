import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeServiceService {

  constructor() { }
  showTodayDate() {
      let ndate = new Date();
      return ndate;
   }
}
