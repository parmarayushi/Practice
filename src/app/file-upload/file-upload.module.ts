import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadFormContainerComponent } from './file-upload-form-container/file-upload-form-container.component';
import { FileUploadListContainerComponent } from './file-upload-list-container/file-upload-list-container.component';
import { FileUploadFormPresentationComponent } from './file-upload-form-container/file-upload-form-presentation/file-upload-form-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadListPresentationComponent } from './file-upload-list-container/file-upload-list-presentation/file-upload-list-presentation.component';
import { FileUploadService } from './file-upload.service';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadFormContainerComponent,
    FileUploadListContainerComponent,
    FileUploadFormPresentationComponent,
    FileUploadListPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    HttpClientModule
  ],
  providers:[
    FileUploadService
  ]
})
export class FileUploadModule { }
