import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StepperFormRoutingModule } from './stepper-form-routing.module';
import { StepperFormComponent } from './stepper-form.component';
import { StepperFormContainerComponent } from './stepper-form-container/stepper-form-container.component';
import { PersonalDetailsPresentationComponent } from './stepper-form-container/personal-details-presentation/personal-details-presentation.component';
import { ContactDetailsPresentationComponent } from './stepper-form-container/contact-details-presentation/contact-details-presentation.component';
import { CompanyDetailsPresentationComponent } from './stepper-form-container/company-details-presentation/company-details-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperFormService } from './stepper-form.service';

@NgModule({
  declarations: [
    StepperFormComponent,
    PersonalDetailsPresentationComponent,
    ContactDetailsPresentationComponent,
    CompanyDetailsPresentationComponent,
    StepperFormContainerComponent
  ],
  imports: [
    CommonModule,
    StepperFormRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    StepperFormService
  ]
})
export class StepperFormModule { }
