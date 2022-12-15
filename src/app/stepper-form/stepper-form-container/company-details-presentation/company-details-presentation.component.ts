import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperFormService } from '../../stepper-form.service';
import { CompanyDetailsPresenterService } from '../company-details-presenter/company-details-presenter.service';

@Component({
  selector: 'app-company-details-presentation',
  templateUrl: './company-details-presentation.component.html',
  viewProviders: [CompanyDetailsPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDetailsPresentationComponent implements OnInit {

  public companyDetailsForm: FormGroup

  constructor(
    private companyDetailsPresenter: CompanyDetailsPresenterService,
    private stepperFormService: StepperFormService,
    private route: Router
  ) {
    this.companyDetailsForm = this.companyDetailsPresenter.buildForm();
  }

  ngOnInit(): void {
    this.props();
  }

  public props() {
    this.companyDetailsPresenter.companyDetailsData$.subscribe((res) => {
      if (this.stepperFormService.dataArray.length === 2) {
        this.stepperFormService.dataArray.push(res);
      } else {
        this.stepperFormService.dataArray.splice(2, 1);
        this.stepperFormService.dataArray.splice(2, 0, res);
      }
    });
    if (this.stepperFormService.dataArray[2])
      this.companyDetailsForm.patchValue(this.stepperFormService.dataArray[2]);
  }

  public onSubmit() {
    if (this.companyDetailsForm.valid)
      this.companyDetailsPresenter.submitData(this.companyDetailsForm.value);
      this.stepperFormService.result();
      
  }

  public onPrevious() {
    if (this.companyDetailsForm.valid)
      this.companyDetailsPresenter.submitData(this.companyDetailsForm.value);

    this.route.navigateByUrl('/stepper-form/contact-details');
  }

}
