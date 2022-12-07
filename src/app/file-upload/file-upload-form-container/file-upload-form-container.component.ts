import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileUpload } from '../file-upload.model';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload-form-container',
  templateUrl: './file-upload-form-container.component.html',
})
export class FileUploadFormContainerComponent implements OnInit {


  public fileList$: Observable<FileUpload[]>
  constructor(private fileService: FileUploadService) {
    this.fileList$ = new Observable();
  }

  ngOnInit(): void {
    this.getFile();
  }

  public getFile() {
    this.fileList$ = this.fileService.getFile();
  }

  public addFile(file: FileUpload) {
    this.fileList$.subscribe((list) => {
      let isFile = list.find((res) => {
        return res.name === file.name
      })

      if (isFile) {
        alert("Duplicate File");
      }
      else {
        this.uploadFile(file);
      }
    })
  }

  public uploadFile(file: FileUpload) {
    this.fileService.addFile(file).subscribe(() => {
      alert("File Uploaded Successfully");
      this.getFile();
    })
  }

}
