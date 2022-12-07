import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    ListComponent,
    AdminListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
