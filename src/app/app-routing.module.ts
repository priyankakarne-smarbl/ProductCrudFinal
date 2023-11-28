import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './product/product.component';
import { MenuListComponent } from './menu-list/menu-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path:'product' ,component:ProductsComponent},
  {path:'menulist' ,component:MenuListComponent},
  {path:'' ,redirectTo:'login' ,pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
