import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { FormArrayComponent } from './form-array.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayService } from './form-array.service';


@NgModule({
  declarations: [
    FormArrayComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[
    FormArrayService
  ]
})
export class FormArrayModule { }
