
import { AuthenService } from './../Core/services/authen.service';
import { UtilityService } from './../Core/services/utility.service';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent],
  providers: [UtilityService, AuthenService]
})
export class MainModule { }