import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsPresentationComponent } from './stepper-form-container/company-details-presentation/company-details-presentation.component';
import { ContactDetailsPresentationComponent } from './stepper-form-container/contact-details-presentation/contact-details-presentation.component';
import { PersonalDetailsPresentationComponent } from './stepper-form-container/personal-details-presentation/personal-details-presentation.component';
import { StepperFormContainerComponent } from './stepper-form-container/stepper-form-container.component';
import { StepperFormComponent } from './stepper-form.component';

const routes: Routes = [
  { path: '', component: StepperFormContainerComponent,
    children:[
      { path:'', redirectTo:'personal-details', pathMatch:'full'},
      { path:'personal-details', component:PersonalDetailsPresentationComponent },
      { path:'contact-details', component:ContactDetailsPresentationComponent },
      { path:'company-details', component:CompanyDetailsPresentationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperFormRoutingModule { }
