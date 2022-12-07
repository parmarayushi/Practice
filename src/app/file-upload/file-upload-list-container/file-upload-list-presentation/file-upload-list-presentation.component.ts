import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUpload } from '../../file-upload.model';
import { FileUploadListPresenterService } from '../file-upload-list-presenter/file-upload-list-presenter.service';

@Component({
  selector: 'app-file-upload-list-presentation',
  templateUrl: './file-upload-list-presentation.component.html',
  viewProviders:[FileUploadListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FileUploadListPresentationComponent implements OnInit {

  @Input() set fileList(value: FileUpload[] | null) {
    if (value) {
      this._fileList = value
    }
  }

  public get fileList(): FileUpload[] {
    return this._fileList;
  }

  private _fileList!: FileUpload[];

  @Output() delete :EventEmitter<number>;

  constructor(private fileUploadListPresenter:FileUploadListPresenterService) { 
    this.delete=new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  public onDelete(id:number){
    this.delete.emit(id);
  }

  public viewFile(content: string, type: string) {
    this.fileUploadListPresenter.showFile(content, type);
  }
}
