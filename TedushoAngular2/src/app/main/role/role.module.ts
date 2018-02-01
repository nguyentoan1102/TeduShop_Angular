import { NotificationService } from 'app/Core/services/notification.service';
import { DataService } from 'app/Core/services/data.service';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const roleRoutes: Routes = [
  // localhost:4200/main/user
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  // localhost:4200/main/home/index
  { path: 'index', component: RoleComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roleRoutes)
  ],
  declarations: [RoleComponent],
  providers: [DataService, NotificationService]
})
export class RoleModule { }