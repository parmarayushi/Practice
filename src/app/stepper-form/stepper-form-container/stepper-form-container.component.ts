import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-form-container',
  templateUrl: './stepper-form-container.component.html',
})
export class StepperFormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public stepper = [
    {
      num: 1,
      text: 'Personal-Details',
      router: '/stepper-form/personal-details'
    },
    {
      num: 2,
      text: 'Contact-Details',
      router: '/stepper-form/contact-details'
    },
    {
      num: 3,
      text: 'Company-Details',
      router: '/stepper-form/company-details'
    }
  ];
}
