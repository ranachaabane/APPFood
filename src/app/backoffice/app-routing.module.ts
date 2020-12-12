import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { user } from '../Model/user';
import { UserComponent } from './user/user.component';


const routes: Routes = [
 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
