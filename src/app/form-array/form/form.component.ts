import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskData } from '../form-array.model';
import { FormArrayService } from '../form-array.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: FormArrayService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  get getValue() {
    return this.taskForm.controls;
  }

  taskForm = this.fb.group({
    name: [''],
    city: [''],
    tasks: this.fb.array([this.taskField()])
  })

  public taskField(): FormGroup {
    return this.fb.group({
      tasks: ['']
    })
  }

  public get task() {
    return this.getValue['tasks'] as FormArray;
  }

  public addTasks() {
    this.task.push(this.taskField());
  }

  public deleteTasks(index: number) {
    if (this.task.length != 1) {
      this.task.removeAt(index);
    }
  }

  public onSubmit() {
    this.service.addData(this.taskForm.value as TaskData).subscribe(()=>{
      this.route.navigateByUrl('form-array/form-array-list');
    });
    console.log(this.taskForm.value);
  }
}
