import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUpload } from '../../file-upload.model';
import { FileUploadFormPresenterService } from '../file-upload-form-presenter/file-upload-form-presenter.service';

@Component({
  selector: 'app-file-upload-form-presentation',
  templateUrl: './file-upload-form-presentation.component.html',
  viewProviders:[FileUploadFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FileUploadFormPresentationComponent implements OnInit {

  @Output() fileUpload: EventEmitter<FileUpload>;

  public files!: File[];
  public fileList!: FileList;

  constructor(private fileUploadPresenter: FileUploadFormPresenterService) {
    this.fileUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this.fileUploadPresenter.fileUpload$.subscribe((res) => {
      this.fileUpload.emit(res);
    })
  }

  public readFile(filedata: any) {
    this.fileList = filedata.files;
    this.files = Object.keys(this.fileList).map((key: any) =>
      this.fileList[key]
    )
  }

  public uploadFile() {
    if (this.fileList) {
      this.fileUploadPresenter.uploadFile(this.fileList);
    } else {
      alert("No File is Selected");
    }
  }

}
