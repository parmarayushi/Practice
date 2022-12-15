import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ContactDetails } from '../../stepper-form.model';

@Injectable()
export class ContactDetailsPresenterService {

  private contactDetailsData: Subject<ContactDetails[]>;
  public contactDetailsData$: Observable<ContactDetails[]>;

  constructor(private _fb: FormBuilder) {
    this.contactDetailsData = new Subject();
    this.contactDetailsData$ = new Observable();

    this.contactDetailsData$ = this.contactDetailsData.asObservable();
  }

  public buildForm() {
    return this._fb.group({
      email: [''],
      contactNo: ['']
    })
  }

  public nextData(data: ContactDetails[]) {
    this.contactDetailsData.next(data);
  }
}
