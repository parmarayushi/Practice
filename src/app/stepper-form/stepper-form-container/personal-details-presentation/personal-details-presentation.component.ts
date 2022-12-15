import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperFormService } from '../../stepper-form.service';
import { PersonalDetailsPresenterService } from '../personal-details-presenter/personal-details-presenter.service';

@Component({
  selector: 'app-personal-details-presentation',
  templateUrl: './personal-details-presentation.component.html',
  viewProviders: [PersonalDetailsPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsPresentationComponent implements OnInit {

  public personalDetailsForm: FormGroup;

  constructor(
    private personalDetailsPresenter: PersonalDetailsPresenterService,
    private stepperFormService: StepperFormService,
    private route: Router
  ) {
    this.personalDetailsForm = this.personalDetailsPresenter.buildForm();
  }

  ngOnInit(): void {
    this.props();
  }

  public props() {
    this.personalDetailsPresenter.personalDetailsData$.subscribe((res) => {
      if (this.stepperFormService.dataArray.length === 0) {
        this.stepperFormService.dataArray.push(res);
      } else {
        this.stepperFormService.dataArray.splice(0, 1);
        this.stepperFormService.dataArray.splice(0, 0, res);
      }
    });

    if (this.stepperFormService.dataArray[0])
      this.personalDetailsForm.patchValue(this.stepperFormService.dataArray[0]);
  }

  public onNext() {
    if (this.personalDetailsForm.valid)
      this.personalDetailsPresenter.nextData(this.personalDetailsForm.value);

    this.route.navigateByUrl('/stepper-form/contact-details');
  }

}
