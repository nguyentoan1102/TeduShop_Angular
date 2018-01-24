import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        UserModule,
        RouterModule.forChild(mainRoutes)
    ],
    declarations: [MainComponent]
})
export class MainModule { }