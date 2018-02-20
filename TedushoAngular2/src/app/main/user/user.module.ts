import { NotificationService } from 'app/Core/services/notification.service';
import { DataService } from './../../Core/services/data.service';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { Daterangepicker } from 'ng2-daterangepicker';
import { UploadService } from 'app/Core/services/upload.service';
const userRoutes: Routes = [
  // localhost:4200/main/user
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  // localhost:4200/main/user/index
  { path: 'index', component: UserComponent }
]
@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    ModalModule.forRoot(),
    FormsModule,
    MultiselectDropdownModule,
    Daterangepicker,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent],
  providers: [DataService, NotificationService, UploadService]
})
export class UserModule { }