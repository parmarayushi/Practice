import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FileUpload } from '../../file-upload.model';

@Injectable()
export class FileUploadFormPresenterService {

  private fileUpload: Subject<FileUpload>;
  public fileUpload$: Observable<FileUpload>;
  constructor() {
    this.fileUpload = new Subject();
    this.fileUpload$ = new Observable();

    this.fileUpload$ = this.fileUpload.asObservable();
  }

  allowedFileType = ["image/png", "image/jpeg", "application/pdf"]

  uploadFile(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = {} as FileUpload
      let size = Math.round(files[i].size / 1024 / 1024)
      
      if (size <= 2 && this.allowedFileType.includes(files[i].type)) {
        file.name = files[i].name;
        file.size = size;
        file.type = files[i].type;

        //file reader to read file content
        const reader = new FileReader();
        //read as url to get base64 type data
        reader.readAsDataURL(files[i]);
        reader.onload = (event) => {
          file.content = event.target?.result as string;
          this.fileUpload.next(file);
        }
      }
      else if (!this.allowedFileType.includes(files[i].type)) {
        alert("Please upload proper format")
      }

      else {
        alert("File Size is greater than 2MB");
      }
    }
  }
}
