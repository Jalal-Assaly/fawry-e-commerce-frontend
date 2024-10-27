import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CardModule } from 'primeng/card';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    LoginComponent,
    NewUserComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ToastModule,
    TableModule,
  ]
})
export class UserModule { }
