import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PersonalDetails } from '../../stepper-form.model';

@Injectable()
export class PersonalDetailsPresenterService {

  private personalDetailsData:Subject<PersonalDetails[]>;
  public personalDetailsData$:Observable<PersonalDetails[]>;

  constructor(private _fb:FormBuilder) { 
    this.personalDetailsData=new Subject();
    this.personalDetailsData$=new Observable();

    this.personalDetailsData$=this.personalDetailsData.asObservable();
  }

  public buildForm(){
    return this._fb.group({
      name:[''],
      gender:[''],
      dob:[''],
      age:[''],
      city:[''],
      state:['']
    })
  }

  public nextData(data:PersonalDetails[]){
    this.personalDetailsData.next(data);
  }
}
