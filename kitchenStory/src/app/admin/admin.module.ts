import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { AdditemComponent } from './additem/additem.component';

import { RouterModule } from '@angular/router';
import { AdminlistItemComponent } from './adminlist-item/adminlist-item.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    MainComponent,
    HeaderComponent,
    LogoutComponent,
    AdditemComponent,
    
    AdminlistItemComponent,
    ResetpasswordComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  exports: [
    LoginComponent,
    AdminComponent,
    MainComponent,
    HeaderComponent,
    LogoutComponent,
    AdditemComponent,
    AdminlistItemComponent,
    ResetpasswordComponent,
    
  ],
})
export class AdminModule {}
