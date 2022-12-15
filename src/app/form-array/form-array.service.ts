import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskData } from './form-array.model';

@Injectable()
export class FormArrayService {

  public apiLink: string;
  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  public getData(): Observable<TaskData[]> {
    return this._http.get<TaskData[]>(`${this.apiLink}/taskData`);
  }

  public addData(data: TaskData): Observable<TaskData> {
    return this._http.post<TaskData>(`${this.apiLink}/taskData`, data);
  }

  public deleteData(id: number): Observable<number> {
    return this._http.delete<number>(`${this.apiLink}/taskData/${id}`);
  }
}
