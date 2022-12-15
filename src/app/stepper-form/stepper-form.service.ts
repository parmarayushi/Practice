import { Injectable } from '@angular/core';

@Injectable()
export class StepperFormService {

  public dataArray: any = [];
  public finalData = {};
  constructor() { }

  public result() {
    for (let i = 0; i < 3; i++)
      Object.assign(this.finalData, this.dataArray[i]);

      console.log(this.finalData);
      
  }
}
