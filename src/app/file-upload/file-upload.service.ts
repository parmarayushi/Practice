import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { FileUpload } from './file-upload.model';

@Injectable()
export class FileUploadService {

  private apiLink: string

  constructor(private _http:HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  public getFile():Observable<FileUpload[]>{
    return this._http.get<FileUpload[]>(`${this.apiLink}/fileUpload`);
  }

  public addFile(file:FileUpload):Observable<FileUpload[]>{
    return this._http.post<FileUpload[]>(`${this.apiLink}/fileUpload`,file);
  }

  public deleteFile(id:number):Observable<number>{
    return this._http.delete<number>(`${this.apiLink}/fileUpload/${id}`);
  }
}
