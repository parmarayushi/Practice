import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  usersForm: UntypedFormGroup;
  title:string='';
  
  // firstName:FormControl<string |null>=new FormControl('');
  // lastName:FormControl=new FormControl('');
  // fullName:UntypedFormControl=new UntypedFormControl('');

  constructor(private fb: UntypedFormBuilder) {
    this.usersForm = this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      address: [''],
      city: [''],
    })
  }
  onSubmit() {
    console.log(this.usersForm.value)
  }
}
