import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'file-upload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) },
  { path: 'form-array', loadChildren: () => import('./form-array/form-array.module').then(m => m.FormArrayModule) },
  { path: 'stepper-form', loadChildren: () => import('./stepper-form/stepper-form.module').then(m => m.StepperFormModule) },
  { path: 'chart', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
