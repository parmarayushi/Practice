import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CompanyDetails } from '../../stepper-form.model';

@Injectable()
export class CompanyDetailsPresenterService {

  private companyDetailsData: Subject<CompanyDetails[]>;
  public companyDetailsData$: Observable<CompanyDetails[]>;

  constructor(private _fb: FormBuilder) {
    this.companyDetailsData = new Subject();
    this.companyDetailsData$ = new Observable();

    this.companyDetailsData$ = this.companyDetailsData.asObservable();
  }

  public buildForm() {
    return this._fb.group({
      companyName: [''],
      department: [''],
      branch: [''],
      experience: ['']
    })
  }

  public submitData(data: CompanyDetails[]) {
    this.companyDetailsData.next(data);
  }
}
