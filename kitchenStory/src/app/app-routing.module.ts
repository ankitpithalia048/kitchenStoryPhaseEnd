import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { pathToFileURL } from 'node:url';
import { AdditemComponent } from './admin/additem/additem.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './admin/main/main.component';

import { ResetpasswordComponent } from './admin/resetpassword/resetpassword.component';
import { AddtocartComponent } from './users/addtocart/addtocart.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { UserMainComponent } from './users/main/main.component';
import { OrderitemComponent } from './users/orderitem/orderitem.component';
import { RegisteruserComponent } from './users/registeruser/registeruser.component';
import { SearchlistUserComponent } from './users/searchlist-user/searchlist-user.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"", component: UserMainComponent
  },
  {
    path: "Admin", component: AdminComponent
  },
  {
    path: "Main", component: MainComponent
  },
  {
    path: "Logout", component: AdminComponent
  },
  {
    path: "AddItem", component: AdditemComponent
  },
  {
    path: "resetPassword", component:ResetpasswordComponent
  },
  {
    path:"RegisterUser", component: RegisteruserComponent
  },
  {
    path:"userlogin", component: UserloginComponent
  },
  {
    path:"List", component: ListUserComponent
  },
  {
    path:"AddToCart", component:AddtocartComponent
  },
  {
    path:"OrderItem", component:OrderitemComponent
  },
  {
    path:"SearchList",component:SearchlistUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
