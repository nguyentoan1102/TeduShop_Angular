import { UrlConstants } from 'app/Core/common/url.constants';
import { Router } from '@angular/router';
import { routes } from './login.module';
import { AuthenService } from './../Core/services/authen.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/Core/services/notification.service';
import { MessageContstants } from 'app/Core/common/message.constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string;
  constructor(private authenService: AuthenService, private notificationService: NotificationService, private routes: Router) { }
  ngOnInit() {
  }
  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password).subscribe(data => {
      this.routes.navigate([UrlConstants.HOME]);
    }, error => {
      this.notificationService.printErrorMessage(MessageContstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    });
  }
}