import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileUpload } from '../file-upload.model';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload-list-container',
  templateUrl: './file-upload-list-container.component.html',
})
export class FileUploadListContainerComponent implements OnInit {

  public filterList$: Observable<FileUpload[]>;

  constructor(private fileUploadService: FileUploadService) {
    this.filterList$ = new Observable();
  }

  ngOnInit(): void {
    this.getFile();
  }

  public getFile() {
    this.filterList$ = this.fileUploadService.getFile();
  }

  public deleteFile(id: number) {
    this.fileUploadService.deleteFile(id).subscribe(() => {
      alert("File Delted Successfully");
      this.getFile();
    })
  }
}
