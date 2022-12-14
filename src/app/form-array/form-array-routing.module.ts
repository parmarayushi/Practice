import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: FormArrayComponent },
  {path:'form-array-list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormArrayRoutingModule { }
