import { UtilityService } from './../Core/services/utility.service';
import { AuthenService } from './../Core/services/authen.service';
import { LoggedInUser } from './../Core/domain/loggedin.user';
import { UrlConstants } from './../Core/common/url.constants';
import { SystemConstants } from './../Core/common/system.constants';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user: LoggedInUser;
  public baseFolder: string = SystemConstants.BASE_API;
  constructor(private utilityService: UtilityService, private authenService: AuthenService) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    console.log(this.user);
  }
  logOut() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }
}