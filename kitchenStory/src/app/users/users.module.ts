import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { HeaderComponent } from './header/header.component';
import { UserMainComponent } from './main/main.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FooterComponent } from './footer/footer.component';
import { OrderitemComponent } from './orderitem/orderitem.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchlistUserComponent } from './searchlist-user/searchlist-user.component';



@NgModule({
  declarations: [RegisteruserComponent, UserloginComponent, UsersComponent, HeaderComponent, UserMainComponent, ListUserComponent, AddtocartComponent, FooterComponent, OrderitemComponent, SearchlistUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  exports: [RegisteruserComponent, UserloginComponent, UsersComponent, HeaderComponent, UserMainComponent, ListUserComponent]
})
export class UsersModule { }
