import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperFormService } from '../../stepper-form.service';
import { ContactDetailsPresenterService } from '../contact-details-presenter/contact-details-presenter.service';

@Component({
  selector: 'app-contact-details-presentation',
  templateUrl: './contact-details-presentation.component.html',
  viewProviders: [ContactDetailsPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsPresentationComponent implements OnInit {

  public contactDetailsForm: FormGroup;

  constructor(
    private conatctDetailsPresenter: ContactDetailsPresenterService,
    private stepperFormService: StepperFormService,
    private route: Router
  ) {
    this.contactDetailsForm = this.conatctDetailsPresenter.buildForm();
  }

  ngOnInit(): void {
    this.props();
  }

  public props() {
    this.conatctDetailsPresenter.contactDetailsData$.subscribe((res) => {
      if (this.stepperFormService.dataArray.length === 1) {
        this.stepperFormService.dataArray.push(res);
      } else {
        this.stepperFormService.dataArray.splice(1, 1);
        this.stepperFormService.dataArray.splice(1, 0, res);
      }
    });

    if (this.stepperFormService.dataArray[1])
      this.contactDetailsForm.patchValue(this.stepperFormService.dataArray[1]);
  }

  public onNext() {
    if (this.contactDetailsForm.valid)
      this.conatctDetailsPresenter.nextData(this.contactDetailsForm.value);

    this.route.navigateByUrl('/stepper-form/company-details');
  }

  public onPrevious() {
    if (this.contactDetailsForm.valid)
      this.conatctDetailsPresenter.nextData(this.contactDetailsForm.value);

    this.route.navigateByUrl('/stepper-form/personal-details');
  }
}
