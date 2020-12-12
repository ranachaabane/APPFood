import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticaldetailComponent } from './articaldetail/articaldetail.component';
import { ProductComponent } from './backoffice/product/product.component';
import { UserComponent } from './backoffice/user/user.component';



const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: UserComponent },
  { path: "product", component: ProductComponent },
  { path: "articaldetail/:id", component: ArticaldetailComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
