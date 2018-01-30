import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { SystemConstants } from './../common/system.constants';
import { AuthenService } from './authen.service';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs/Observable';
import { MessageContstants } from './../common/message.constants';
@Injectable()
export class DataService {
  constructor() { }
}