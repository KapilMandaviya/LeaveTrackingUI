import { Component, OnInit } from '@angular/core';
import { UtitlityServiceService } from './Service/utitlity-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  public username="";
  public userrole="";
  ngOnInit() {
    this.username=this.utility.getNameFromToken();
    this.userrole=this.utility.getRoleFromToken();
  }
  constructor(public utility:UtitlityServiceService){

  }
  title = 'LeaveTrackingUI';
  signOut()
  {
    this.utility.signOut();
  }
  

  

}
